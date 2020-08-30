import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-house-item-description',
  templateUrl: './house-item-description.component.html',
  styleUrls: ['./house-item-description.component.css']
})
export class HouseItemDescriptionComponent implements OnInit {

  private id: string;

  constructor(private acrivatedRoute: ActivatedRoute) {
    this.id = 'Не нашли';
    if (acrivatedRoute.snapshot.paramMap.has('id')) {
      this.id = acrivatedRoute.snapshot.paramMap.get('id');
    }
   }

  ngOnInit() {
  }

}
