import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      const routeId = params.get('id');
      console.log(routeId);
    });
  }

}
