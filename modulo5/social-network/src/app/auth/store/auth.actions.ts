import { LoginRequest, LoginResponse, RegisterRequest } from '../auth.models';
import { Error } from 'src/app/error/error.models';

export class Login {
  static readonly type = '[Auth] Login';
  constructor(public login: LoginRequest) {}
}

export class LoginSuccess {
  static readonly type = '[Auth] LoginSuccess';
  constructor(public loginResponse: LoginResponse) {}
}
// [Auth] es el nombre de la acción
export class LoginFailed {
  static type = '[Auth] LoginFailed';
  constructor(public errors: Error[]) {}
}

export class Register{
  static readonly type = '[Auth] Register';
  constructor(public register: RegisterRequest){}
}
export class RegisterSuccess{
  static readonly type = '[Auth] RegisterSuccess';
  //El constructor no hace falta ya que no devuelve nada
 // constructor(public register: RegisterResponse){}
}
export class RegisterFailed {
  static type = '[Auth] RegiFailed';
  constructor(public errors: Error[]) {}
}