import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WallComponent } from './container/dashboard/wall/wall.component';
import { DashboardComponent } from './container/dashboard/dashboard/dashboard.component';
import { AuthGuard } from '../auth/services/auth.guard';

const routes: Routes = [{
   path: '',
   component:DashboardComponent,
   //Si no está logueado no deja que entre en las rutas siguientes
   canActivate: [AuthGuard],
   children:[{
     path:'wall',
    component: WallComponent
   }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
