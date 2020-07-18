import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { HeaderComponent } from './controllers/header/header.component';
import { SideNavComponent } from './controllers/side-nav/side-nav.component';
import { LayoutComponent } from './controllers/layout/layout.component';
import { FooterComponent } from './controllers/footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SideNavComponent,
    LayoutComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
