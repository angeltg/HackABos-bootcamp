import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[changeColor]'
})
export class AuthDirective {

  colorArr = [
    '#9c528b','#e2c2c6','#610f7f','#b9929f','green','goldenrod','rebeccapurple','tomato','yellowgreen','hotpink'
  ];

  @HostBinding('style.box-shadow') boxshadow: string;
  
  @HostListener('keydown') newColor() {
    const colorPosition = Math.floor(Math.random() * this.colorArr.length);

    this.boxshadow = '2px 2px 15px '+this.colorArr[colorPosition];
  }

  constructor() { }

}
