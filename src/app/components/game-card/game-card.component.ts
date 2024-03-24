import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Game } from '../../shared/interfaces/models/game.model';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[game-card]',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss',
})
export class GameCardComponent {
  @Input() game: Game = <Game>{};
}
