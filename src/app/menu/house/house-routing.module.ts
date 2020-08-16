import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuHouseComponent } from './components/menu-house/menu-house.component';
import { HouseItemDescriptionComponent } from './components/house-item-description/house-item-description.component';


const routes: Routes = [
    {
        path: '',
        component: MenuHouseComponent
    },
    {
        path: '/:id',
        component: HouseItemDescriptionComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HouseRoutingModule { }