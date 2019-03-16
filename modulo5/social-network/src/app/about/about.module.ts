import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { AboutRoutingModule } from './about.routing.module';

//Esto le dice a Angular que es un módulo y ya importa el ngModule
@NgModule ({
  imports:[CommonModule,AboutRoutingModule],
  declarations:[AboutComponent],
})

export class AboutModule {}