import { Friend } from '../dashboard.models';
import { Error } from '../../error/error.models';

export class GetFriends {
  //Dashboard es la carpeta donde estamos
  static readonly type = '[Dashboard] GetFriends';
  //Como no lo epasamos nada no hace falta
  //constructor(public login: LoginRequest) {}
}

export class GetFriendSuccess {
  static readonly type = '[Dashboard] FriendSuccess';
  constructor(public friends: Friend[]) {}
}
// [Auth] es el nombre de la acción
export class GetFriendFailed {
  static type = '[Dashboard] FriendFailed';
  constructor(public errors: Error[]) {}
}