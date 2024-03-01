export class Member {
  username: string;
  email: string;
  currency: number;
  role: string;

  constructor(username: string, email: string, currency: number, role: string) {
    this.username = username;
    this.email = email;
    this.currency = currency;
    this.role = role;
  }
}
