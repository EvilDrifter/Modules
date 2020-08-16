import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbHouseService } from 'src/app/services/db-house.service';
import { filter } from 'rxjs/operators';
import { first } from 'rxjs/operators';
import { House } from 'src/app/models/house';

@Component({
  selector: 'app-house-item-description',
  templateUrl: './house-item-description.component.html',
  styleUrls: ['./house-item-description.component.css']
})
export class HouseItemDescriptionComponent implements OnInit {
  private selectedHouse: House;

  constructor(private activatedRoute: ActivatedRoute, private houseService: DbHouseService) {
    let id = '0';
    if (activatedRoute.snapshot.paramMap.has('id')){
      id = activatedRoute.snapshot.paramMap.get('id');
    }

    this.GetHouseById(id);
  }

  ngOnInit() {
  }

  private GetHouseById(id: string){
    this.houseService.getHouses().subscribe(x => this.selectedHouse = x.filter(m => m.id === id)[0]);
  }

}
