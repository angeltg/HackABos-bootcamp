import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'sn-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    // Lo datos que te pasan, los parámetros de validación, y la llamada asíncrona para comprobar su existencia
    email: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    //Esto es un obervable, es parecido a las promesas pero pasan muchos valores. Hay que suscribirse para echucar
   
   // this.loginForm.valueChanges(data => console.log(data));
  }
  login() {
    if ( this.loginForm.valid){
      // llamada de red para logearse
      this.authService.login(this.loginForm.value).subscribe(data => console.log(data), error => console.log(error));
       // console.log(this.loginForm.value);
    }

  }

}
