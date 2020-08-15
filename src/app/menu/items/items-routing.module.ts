import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OneItemComponent } from './components/one-item/one-item.component';



const routes: Routes = [
  {
    path: '',
    component: OneItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }