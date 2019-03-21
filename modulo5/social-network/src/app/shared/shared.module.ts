import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SiteLayoutComponent } from './components/site-layout/site-layout.component';
import { SiteLayoutHeaderComponent } from './components/site-layout-header/site-layout-header.component';
import { SiteLayoutFooterComponent } from './components/site-layout-footer/site-layout-footer.component';

import { FormComponent } from './components/forms/form.component';
import { FormControlComponent } from './components/forms/form-control.component';

@NgModule({
  declarations: [
    SiteLayoutComponent,
    SiteLayoutHeaderComponent,
    SiteLayoutFooterComponent,
    FormComponent,
    FormControlComponent
  ],
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  exports: [
    SiteLayoutComponent,
    SiteLayoutHeaderComponent,
    SiteLayoutFooterComponent,
    FormComponent,
    FormControlComponent
  ]
})
export class SharedModule {}
