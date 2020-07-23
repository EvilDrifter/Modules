import { NgModule } from '@angular/core';
import { ContentRoutingModule } from './content-routing.modult';
import { ContentComponent } from './content.component';
import { CommerceComponent } from './commerce/commerce.component';
import { LayoutModule } from '../core/modules/layout/layout.module';
import { ProductItemComponent } from './product-item/product-item.component';
import { MaterialModule } from '../core/modules/material/material.module';
import { CommonModule } from '@angular/common';
import { ProductDescriptionComponent } from './product-description/product-description.component';


@NgModule({
  imports: [
    ContentRoutingModule,
    LayoutModule,
    MaterialModule,
    CommonModule
  ],
  declarations: [
    ContentComponent,
    CommerceComponent,
    ProductItemComponent,
    ProductDescriptionComponent
  ],
})
export class ContentModule {
}
