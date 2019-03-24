import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
//import { AuthService } from '../../services/auth.service';
import { Store } from '@ngxs/store';
import { Login } from '../../store/auth.actions';

import { MailValidator } from '../../../auth/validators/email.validator';


@Component({
  selector: 'sn-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  loginForm = this.fb.group({
    // Lo datos que te pasan, los parámetros de validación, y la llamada asíncrona para comprobar su existencia
    email: ['', [Validators.required,MailValidator]],
    password: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder, private store: Store) { }

  ngOnInit() {
    //Esto es un obervable, es parecido a las promesas pero pasan muchos valores. Hay que suscribirse para echucar
   
   // this.loginForm.valueChanges(data => console.log(data));
  }
  login() {
    if ( this.loginForm.valid){
      // llamada de red para logearse
     // this.authService.login(this.loginForm.value).subscribe(data => console.log(data), error => console.log(error));
       // console.log(this.loginForm.value);
       this.store.dispatch(new Login(this.loginForm.value));
      }

  }

}