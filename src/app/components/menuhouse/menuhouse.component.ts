import { Component, OnInit } from '@angular/core';
import { DbhouseService } from 'src/app/services/dbhouse.service';
import { House } from 'src/app/models/house';

@Component({
  selector: 'app-menuhouse',
  templateUrl: './menuhouse.component.html',
  styleUrls: ['./menuhouse.component.css']
})
export class MenuhouseComponent implements OnInit {
  private houses: Array<House>;

  constructor(private service: DbhouseService) {
    service.getHouses().subscribe(x => {
      this.houses = x;
      console.log(this.houses);
    });
   }

  ngOnInit() {
  }

}
