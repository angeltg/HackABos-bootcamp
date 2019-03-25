import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { FriendPetition } from '../dashboard.models';
import { Observable } from "rxjs";

@Injectable({

  providedIn: 'root'

})

export class FriendPetitionService{

    //Si no ponemos private no podemos acceder con this.http
    constructor ( private http: HttpClient){}

    getFriendsPetition(): Observable<FriendPetition[]> {
      return this.http.get<FriendPetition[]>(`${environment.apiBaseUrl}/user/friendrequests`);
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
