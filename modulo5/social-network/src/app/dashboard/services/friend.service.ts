import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Friend } from '../dashboard.models';
import { Observable } from "rxjs";

@Injectable({

  providedIn: 'root'

})

export class FriendService{

    //Si no ponemos private no podemos acceder con this.http
    constructor ( private http: HttpClient){}

    getFriends(): Observable<Friend[]> {
      return this.http.get<Friend[]>(`${environment.apiBaseUrl}/user/search?q=yag`);
    } 
    //  register ({email,password, fullName}: RegisterRequest){
       
    //     return this.http.post(
    //       `${environment.apiBaseUrl}/account`, 
    //       {
    //        email,
    //        password,
    //        fullName
    //       }
    //     );
    //  }  
    // register({ email, password, fullName }){
    //    return this.http.post(`${environment.apiBaseUrl}/account`, {
    //     email,
    //     password,
    //     fullName
    //   });
    // }

}
