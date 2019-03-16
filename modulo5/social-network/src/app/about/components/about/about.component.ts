import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'sn-about', // Ssí lo voy a seleccionar desde mis plantillas
  template: './about.component.html',
  styleUrls:['./about.component.scss'] 

}) 

export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}