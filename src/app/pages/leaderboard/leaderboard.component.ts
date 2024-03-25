import { Component, OnInit } from '@angular/core';
import { Game } from '../../shared/interfaces/models/game.model';
import { GameService } from '../../shared/services/game.service';
import { GameElo } from '../../shared/interfaces/models/gameElo.model';

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.scss',
})
export class LeaderboardComponent implements OnInit {
  games: Game[] = [];
  gameElos: GameElo[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getGames().subscribe((games) => {
      this.games = games;
    });
  }

  onGameChange($event: Event) {
    const gameName = ($event.target as HTMLSelectElement).value;
    this.gameService.getLeaderboard(gameName).subscribe((gameElos) => {
      this.gameElos = gameElos;
    });
  }
}
