import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { PostResponse } from '../dashboard.models';
import { Observable } from "rxjs";

@Injectable({

  providedIn: 'root'

})

export class PostService{

    //Si no ponemos private no podemos acceder con this.http
    constructor ( private http: HttpClient){}

    getWall(): Observable<PostResponse[]> {
      return this.http.get<PostResponse[]>(`${environment.apiBaseUrl}/user/wall`);
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
