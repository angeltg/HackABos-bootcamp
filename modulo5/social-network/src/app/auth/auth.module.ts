import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'
//import { HttpClientModule } from '@angular/common/http';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './containers/login/login.component';
import { RegisterComponent } from './containers/register/register.component';
import { AuthDirective } from '../shared/directives/auth.directive';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, AuthDirective],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [LoginComponent, RegisterComponent]
})
export class AuthModule { }
