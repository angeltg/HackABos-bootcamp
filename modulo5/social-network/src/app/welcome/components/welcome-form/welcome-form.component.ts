import { Component } from '@angular/core';

@Component({
  selector: 'sn-welcome-form',
  templateUrl: './welcome-form.component.html',
  styleUrls: ['./welcome-form.component.scss']
})
export class WelcomeFormComponent{

 isRegisterFormVisible: boolean = true;

 toggleForm($event){
   this.isRegisterFormVisible = !this.isRegisterFormVisible;
 }

}
