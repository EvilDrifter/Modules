import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneItemComponent } from './components/one-item/one-item.component';
import { ItemsRoutingModule } from './items-routing.module';



@NgModule({
  declarations: [
    OneItemComponent
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule
  ]
})
export class ItemsModule { }
