import { Directive, HostListener } from '@angular/core';

@Directive({
  selector : '[snPreventDefault]'
})

export class ClickPreventDefaultDirective{

  //Escucha un click en el elemento que tenga la propiedad [snPreventDefault]
  @HostListener('click',['$event'])

  onclick(event){
    event.preventDefault();
    event.stopeventDEfault();

  }
}