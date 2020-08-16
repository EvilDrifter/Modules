import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuHouseComponent } from './components/menu-house/menu-house.component';
import { HouseItemComponent } from './components/house-item/house-item.component';
import { HouseItemDescriptionComponent } from './components/house-item-description/house-item-description.component';
import { MaterialModule } from 'src/app/core/material.module';
import { HouseRoutingModule } from './house-routing.module';


@NgModule({
  declarations: [
    MenuHouseComponent,
    HouseItemComponent,
    HouseItemDescriptionComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HouseRoutingModule
  ]
})
export class HouseModule { }
