import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({

  providedIn: 'root'

})

export class AuthService{

    constructor ( private http: HttpClient){}

    login({ email, password }){
       return this.http.post(`${environment.apiBaseUrl}/account/login`, {
        email,
        password
      });
    }
    register({ email, password, fullName }){
      return this.http.post(`${environment.apiBaseUrl}/account`, {
       email,
       password,
       fullName
     });
   }

}
