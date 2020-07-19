import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  styleUrls: ['content.component.css'],
  template: `
    <app-layout>
      <router-outlet></router-outlet>
    </app-layout>
  `,
})
export class ContentComponent {

}
