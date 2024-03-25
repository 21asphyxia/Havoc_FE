export class GameElo {
  username: string;
  elo: number;

  constructor(username: string, elo: number) {
    this.username = username;
    this.elo = elo;
  }
}
