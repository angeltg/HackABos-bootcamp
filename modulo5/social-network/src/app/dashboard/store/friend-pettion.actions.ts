import { FriendPetition } from '../dashboard.models';
import { Error } from '../../error/error.models';

export class GetFriendsPettion {
  //Dashboard es la carpeta donde estamos
  static readonly type = '[Dashboard] GetFriendsPetition';
  //Como no lo epasamos nada no hace falta
  //constructor(public login: LoginRequest) {}
}

export class GetFriendPetitionSuccess {
  static readonly type = '[Dashboard] FriendPetitionSuccess';
  constructor(public friendsPetition: FriendPetition[]) {}
}
// [Auth] es el nombre de la acción
export class GetFriendPetitionFailed {
  static type = '[Dashboard] FriendPetitionFailed';
  constructor(public errors: Error[]) {}
}