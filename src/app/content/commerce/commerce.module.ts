import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/core/modules/material/material.module';
import { CommerceComponent } from './commerce.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    MaterialModule,
    CommonModule
  ],
  declarations: [
    CommerceComponent,
  ],
})
export class CommerceModule { }
