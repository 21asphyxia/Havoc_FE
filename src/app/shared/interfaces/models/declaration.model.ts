export class Declaration {
  id: number;
  winner: string;
  loser: string;
  game: string;
  matchId: number;
  image: string;
  status: string;
  constructor(
    id: number,
    winner: string,
    loser: string,
    game: string,
    matchId: number,
    image: string,
    status: string,
  ) {
    this.id = id;
    this.winner = winner;
    this.loser = loser;
    this.game = game;
    this.matchId = matchId;
    this.image = image;
    this.status = status;
  }
}
