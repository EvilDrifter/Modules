import { NgModule } from '@angular/core';
import { ContentRoutingModule } from './content-routing.modult';
import { ContentComponent } from './content.component';
import { CommerceComponent } from './commerce/commerce.component';
import { LayoutModule } from '../core/modules/layout/layout.module';



@NgModule({
  imports: [
    ContentRoutingModule,
    LayoutModule
  ],
  declarations: [
    ContentComponent,
    CommerceComponent
  ],
})
export class ContentModule {
}
