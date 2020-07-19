import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ContentComponent } from './content.component';
import { CommerceComponent } from './commerce/commerce.component';

const routes: Routes = [{
  path: '',
  component: ContentComponent,
  children: [
    {
      path: 'commerce',
      component: CommerceComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentRoutingModule {
}
