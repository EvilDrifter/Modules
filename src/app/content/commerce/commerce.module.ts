import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/core/modules/material/material.module';
import { CommerceComponent } from './commerce.component';

@NgModule({
  imports: [
    MaterialModule
  ],
  declarations: [
    CommerceComponent,
  ],
})
export class CommerceModule { }
