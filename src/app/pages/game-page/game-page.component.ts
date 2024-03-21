import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { MatchmakingService } from '../../shared/services/matchmaking.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Flowbite } from '../../shared/decorators/flowbite';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-game-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.scss',
})
@Flowbite()
export class GamePageComponent implements OnInit, OnDestroy {
  matchmakingService: MatchmakingService = inject(MatchmakingService);

  loading = true;
  matchId: string = '';
  game: string = '';
  status: string = '';
  $matchmaking = Subscription.EMPTY;

  form: FormGroup = new FormGroup({});

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any = null;
  firstPlayerName: string = '';
  secondPlayerName: string = '';

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      image: [null, Validators.required],
    });

    this.route.params.subscribe((params) => {
      this.game = params['name'];
    });

    this.$matchmaking = this.matchmakingService
      .joinMatchmaking(this.game)
      .subscribe((data) => {
        this.matchId = data.id;
        this.status = data.status;
        if (data.status === 'READY') {
          this.loading = false;
          this.firstPlayerName = data.firstPlayer;
          this.secondPlayerName = data.secondPlayer;
        }
      });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selectImage(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.image = file;
    }
  }

  sendDeclaration() {
    console.log(this.image);

    if (!this.image) return;
    const data = new FormData();
    data.append('image', this.image);

    console.log(data.has('image'));

    this.matchmakingService.sendDeclaration(this.matchId, data).subscribe(
      (data) => {
        this.status = data.status;
      },
      (error) => {
        alert(error.error.message);
      },
    );
  }

  ngOnDestroy(): void {
    this.$matchmaking.unsubscribe();
  }
}
