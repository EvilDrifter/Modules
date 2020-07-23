import { Component, OnInit, Input } from '@angular/core';
import { ApartmentInfo } from 'src/app/models/apartment-info';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() info: ApartmentInfo;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  NavigateToDescription() {
    this.router.navigateByUrl(`/pages/description/${this.info.Id}`);
  }
}
