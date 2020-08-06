import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuhouseComponent } from './components/menuhouse/menuhouse.component';
import { MenuflatComponent } from './components/menuflat/menuflat.component';
import { MenutownhouseComponent } from './components/menutownhouse/menutownhouse.component';


const routes: Routes = [
  {
    path: 'house',
    component: MenuhouseComponent
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
