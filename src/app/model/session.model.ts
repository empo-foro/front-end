import {User} from './user.model';

export class Session {
  token: string;
  user: User;

  constructor(token:string, user:User) {
    this.token=token;
    this.user=user;
  }
}
