import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuHouseComponent } from './components/menu-house/menu-house.component';
import { MenuFlatComponent } from './components/menu-flat/menu-flat.component';
import { MenuTownhouseComponent } from './components/menu-townhouse/menu-townhouse.component';


const routes: Routes = [
  {
    path: 'house',
    component: MenuHouseComponent
  },
  {
    path: 'flat',
    component: MenuFlatComponent
  },
  {
    path: 'townhouse',
    component: MenuTownhouseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
