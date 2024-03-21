export class Match {
  id: string;
  firstPlayer: string;
  secondPlayer: string;
  game: string;
  status: string;

  constructor(
    id: string,
    firstPlayer: string,
    secondPlayer: string,
    game: string,
    status: string,
  ) {
    this.id = id;
    this.firstPlayer = firstPlayer;
    this.secondPlayer = secondPlayer;
    this.game = game;
    this.status = status;
  }
}
