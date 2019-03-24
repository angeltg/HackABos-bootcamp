import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginRequest, LoginResponse, RegisterRequest } from '../auth.models';
import { map } from 'rxjs/operators';


@Injectable({

  providedIn: 'root'

})

export class AuthService{

    constructor ( private http: HttpClient){}

    login({ email, password }: LoginRequest) {
      
      return this.http.post<LoginResponse>(
        `${environment.apiBaseUrl}/account/login`,
        {
          email,
          password
        }
        //Como devuelve un observable podemos escuchar lo que va por la tubería
      ).pipe(
        map(user => {
          if (user && user.accessToken){
            //Desecstructuramos el objeto user para quedarnos con el token.
            const{ accessToken, refreshToken} = user;
            localStorage.setItem(
              'auth',
              JSON.stringify({ accessToken, refreshToken})
            );
          }
          return user;
        })
      );
    } 
     register ({email,password, fullName}: RegisterRequest){
       
        return this.http.post(
          `${environment.apiBaseUrl}/account`, 
          {
           email,
           password,
           fullName
          }
        );
     }  
    // register({ email, password, fullName }){
    //    return this.http.post(`${environment.apiBaseUrl}/account`, {
    //     email,
    //     password,
    //     fullName
    //   });
    // }

}
