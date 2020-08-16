import { Component, OnInit, Input } from '@angular/core';
import { House } from 'src/app/models/house';

@Component({
  selector: 'app-house-item',
  templateUrl: './house-item.component.html',
  styleUrls: ['./house-item.component.css']
})
export class HouseItemComponent implements OnInit {
  @Input() info: House;
  constructor() { }

  ngOnInit() {
  }

}
