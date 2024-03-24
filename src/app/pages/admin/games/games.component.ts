/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, ViewChild } from '@angular/core';

import { Game } from '../../../shared/interfaces/models/game.model';
import {
  ButtonModule,
  CardBodyComponent,
  CardComponent,
  ColComponent,
  FormModule,
  ModalModule,
  TableModule,
} from '@coreui/angular';
import { FormsModule, NgForm } from '@angular/forms';
import { GameService } from '../../../shared/services/game.service';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [
    ColComponent,
    CardBodyComponent,
    CardComponent,
    TableModule,
    ButtonModule,
    ModalModule,
    FormsModule,
    FormModule,
  ],
  templateUrl: './games.component.html',
  styleUrl: './games.component.scss',
})
export class GamesComponent {
  @ViewChild('closeCreateModal') closeCreateModal: any;
  @ViewChild('closeEditModal') closeEditModal: any;

  games: Game[] = [];

  selectedGame: Game = {
    id: 0,
    name: '',
    image: '',
  };
  createImage: any;
  editImage: any;

  constructor(private gameService: GameService) {
    this.gameService.getGames().subscribe((games) => {
      this.games = games;
    });
  }

  selectCreateImage(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.createImage = file;
    }
  }

  selectEditImage(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.editImage = file;
    }
  }

  selectGame(game: Game) {
    this.selectedGame = game;
  }

  deleteGame(id: number) {
    if (confirm('Are you sure you want to delete this game?')) {
      this.gameService.deleteGame(id).subscribe(() => {
        this.games = this.games.filter((game) => game.id !== id);
      });
    }
  }

  onSubmit(formValue: NgForm) {
    if (formValue.invalid || !this.createImage) {
      return;
    }
    const formData = new FormData();
    formData.append('name', formValue.value.name);
    formData.append('image', this.createImage);
    this.gameService.createGame(formData).subscribe((game) => {
      this.games.push(game);
      formValue.reset();
      this.closeCreateModal.nativeElement.click();
    });
  }

  onSubmitEdit(formValue: NgForm) {
    if (formValue.invalid) {
      return;
    }
    const formData = new FormData();
    formData.append('name', formValue.value.name);
    if (this.editImage) formData.append('image', this.editImage);
    this.gameService
      .updateGame(this.selectedGame.id, formData)
      .subscribe((game) => {
        this.games = this.games.map((g) => (g.id === game.id ? game : g));
        this.closeEditModal.nativeElement.click();
      });
  }
}
