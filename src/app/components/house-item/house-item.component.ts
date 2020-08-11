import { Component, OnInit, Input } from '@angular/core';
import { Hosted } from 'protractor/built/driverProviders';
import { House } from 'src/app/models/house';
import { Router } from '@angular/router';

@Component({
  selector: 'app-house-item',
  templateUrl: './house-item.component.html',
  styleUrls: ['./house-item.component.css']
})
export class HouseItemComponent implements OnInit {
  @Input() info: House;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  open(){
    this.router.navigate([`/house/${this.info.id}`]);
  }

}
