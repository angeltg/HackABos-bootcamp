import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MailValidator } from '../../../auth/validators/email.validator';

@Component({
  selector: 'sn-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({
    // Lo datos que te pasan, los parámetros de validación, y la llamada asíncrona para comprobar su existencia
    email: ['', [Validators.required, MailValidator]],
    password: ['', [Validators.required]],
    fullName: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]]
  }, { updateOn: 'blur'}); // ESto hace referencia a todo el grupo de campos. Esto último es para que solo valida el campo una vez que salgo del mismo

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
