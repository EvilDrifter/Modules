import { Component } from '@angular/core';
import { ApartmentService } from 'src/app/services/apartment/apartment.service';
import { ApartmentInfo } from 'src/app/models/apartment-info';

@Component({
  selector: 'app-commerce',
  styleUrls: ['./commerce.component.css'],
  templateUrl: './commerce.component.html',
})
export class CommerceComponent {
  apartments: Array<ApartmentInfo>;
  constructor(private service: ApartmentService) {
    this.service.GetApartments().subscribe(x => this.apartments = x);
  }
}
