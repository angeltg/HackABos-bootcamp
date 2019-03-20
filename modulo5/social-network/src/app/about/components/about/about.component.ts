import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { faAngular } from '@fortawesome/fontawesome-free-brands';


@Component({
  selector: 'sn-about', // Ssí lo voy a seleccionar desde mis plantillas
  templateUrl: './about.component.html',
  styleUrls:['./about.component.scss'] 
}) 

export class AboutComponent  {

  hello = { text:'Qué pasa!!', icon:faAngular};
  name: string = 'Soy Ángel Téllez';
  presentation: string = 'Soy desarrollador frontend y me encanta hacer webs preciosas! Puedes saber más sobre mí visitando los siguientes enlaces:';
  rrsss = [
    { url:'http://linkedIn.com', text:'Mi linkedIn'},
    { url:'http://github.com', text:'Mi GitHub'},
    { url:'http://portfolio.com', text:'Mi portfolio'},
    { url:'http://twitter.com', text:'Mi Twitter'}
  ];
  contact = {email:'angeltellezgonzalez@gmail.com',text:'Si quieres contactar conmigo puedes hacerlo en siguiente email:'};

  private urlapi
    = 'https://pokeapi.co/api/v2/pokemon/25/';
  public pokemonPicture: any = null;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.getPokemonPicture();
  }

  private getPokemonPicture() {
    const currencies = 'front_default,back_default';
    const url = `${this.urlapi}?symbols=${currencies}`;
    this.httpClient
      .get(url)
      .subscribe(apiData => (this.pokemonPicture = apiData));
  }
}
