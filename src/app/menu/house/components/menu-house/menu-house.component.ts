import { Component, OnInit } from '@angular/core';
import { DbHouseService } from 'src/app/services/db-house.service';
import { House } from 'src/app/models/house';

@Component({
  selector: 'app-menu-house',
  templateUrl: './menu-house.component.html',
  styleUrls: ['./menu-house.component.css']
})
export class MenuHouseComponent implements OnInit {

  private houses: Array<House>;

  constructor(private houseService: DbHouseService) {
    console.log(this.houseService.getHouses().subscribe(
        x => {
          this.houses = x;
        },
        e => console.log(e),
        () => console.log('done')
      )
    );
  }

  ngOnInit() {
  }

}
