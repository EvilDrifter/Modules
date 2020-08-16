import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuFlatComponent } from './components/menu-flat/menu-flat.component';
import { MenuTownhouseComponent } from './components/menu-townhouse/menu-townhouse.component';


const routes: Routes = [
  {
    path: 'house',
    loadChildren: () => import('./menu/house/house.module').then(m => m.HouseModule)
  },
  {
    path: 'flat',
    component: MenuFlatComponent
  },
  {
    path: 'townhouse',
    component: MenuTownhouseComponent
  },
  {
    path: 'items',
    loadChildren: () => import('./menu/items/items.module').then(m => m.ItemsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
