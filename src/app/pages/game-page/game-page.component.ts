import { Component, OnInit, inject } from '@angular/core';
import { MatchmakingService } from '../../shared/services/matchmaking.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-page',
  standalone: true,
  imports: [],
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.scss',
})
export class GamePageComponent implements OnInit {
  loading = true;
  game: string = '';

  matchmakingService: MatchmakingService = inject(MatchmakingService);

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.game = params['name'];
    });
    this.matchmakingService.joinMatchmaking(this.game).subscribe((data) => {
      console.log(data);
    });
  }
}
