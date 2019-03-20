import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'sn-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({
    // Lo datos que te pasan, los parámetros de validación, y la llamada asíncrona para comprobar su existencia
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    fullName: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    //Esto es un obervable, es parecido a las promesas pero pasan muchos valores. Hay que suscribirse para echucar
   
   // this.loginForm.valueChanges(data => console.log(data));
  }
  register() {
    if ( this.registerForm.valid){
      //TODO llamada de red para logearse
      this.authService.register(this.registerForm.value).subscribe(data => console.log(data), error => console.log(error));
       // console.log(this.loginForm.value);
    }

  }

}
