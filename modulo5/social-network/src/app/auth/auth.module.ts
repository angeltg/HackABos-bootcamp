import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './containers/login/login.component';
import { RegisterComponent } from './containers/register/register.component';
import { AuthDirective } from '../shared/directives/auth.directive';
import { SharedModule } from '../shared/shared.module';
import { AuthState } from './store/auth.state';
import { JwtInterceptor } from './services/jsw.interceptor';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, AuthDirective],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    NgxsModule.forFeature([AuthState])
  ],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
    
  ],
  exports: [LoginComponent, RegisterComponent]
})
export class AuthModule { }
