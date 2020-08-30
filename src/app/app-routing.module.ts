import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuhouseComponent } from './components/menuhouse/menuhouse.component';
import { MenuflatComponent } from './components/menuflat/menuflat.component';
import { MenutownhouseComponent } from './components/menutownhouse/menutownhouse.component';
import { HouseItemComponent } from './components/house-item/house-item.component';
import { HouseItemDescriptionComponent } from './house-item-description/house-item-description.component';


const routes: Routes = [
  {
    path: 'house',
    component: MenuhouseComponent
  },
  {
    path: 'house/:id',
    component: HouseItemDescriptionComponent
  },
  {
    path: 'flat',
    component: MenuflatComponent
  },
  {
    path: 'townhouse',
    component: MenutownhouseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
