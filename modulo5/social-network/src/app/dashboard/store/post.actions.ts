import { PostResponse } from '../dashboard.models';
import { Error } from '../../error/error.models';

export class GetPosts {
  //Dashboard es la carpeta donde estamos
  static readonly type = '[Dashboard] GetPosts';
  //Como no lo epasamos nada no hace falta
  //constructor(public login: LoginRequest) {}
}

export class GetPostSuccess {
  static readonly type = '[Dashboard] PostSuccess';
  constructor(public posts: PostResponse[]) {}
}
// [Auth] es el nombre de la acción
export class GetPostFailed {
  static type = '[Dashboard] PostFailed';
  constructor(public errors: Error[]) {}
}