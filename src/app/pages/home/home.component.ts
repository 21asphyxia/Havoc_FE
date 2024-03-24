import { Component, OnInit, inject } from '@angular/core';
import { GameCardComponent } from '../../components/game-card/game-card.component';
import { Game } from '../../shared/interfaces/models/game.model';
import { GameService } from '../../shared/services/game.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GameCardComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})

export class HomeComponent implements OnInit {
  games: Game[] = [];

  gameService: GameService = inject(GameService);

  ngOnInit(): void {
    this.gameService.getGames().subscribe((games) => {
      this.games = games;
    });
  }
}
