import { Component } from '@angular/core';

@Component({
  selector: 'sn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Primera en Agular';

  constructor(){}

  onClick(event){
  console.log(event);
  }
}
