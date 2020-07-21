import { Injectable } from '@angular/core';
import { ApartmentInfo } from 'src/app/models/apartment-info';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

  public GetApartments(): Observable<Array<ApartmentInfo>> {
    return this.GetApartmentsFromRepo();
  }

  private GetApartmentsFromRepo(): Observable<Array<ApartmentInfo>> {
    const aps = new Array<ApartmentInfo>();

    const ap1 = new ApartmentInfo();
    ap1.Id = 1;
    ap1.CityName = 'New York City';
    ap1.Description = 'Extraordinary loft-like 5 room, 2 bedroom 2 bath maisonette with large PRIVATE TERRACE which wraps around the apartment. Great care has been taken in the gut renovation of this apartment, which features an open kitchen to the large dining area, Kitchen Aid appliance package, Cesar Stone counter tops, washer/dryer in the apartment, wide plank hardwood floors, recessed lighting, two walk-in closets in the master bedroom, marble baths with shower stall and tub. The coop is in excellent financial condition, owns tremendous assets, has on site management office, 2 superintendents, large staff, common gardens, bike storage, and is located one block from Hudson River Park, trendy restaurants and boutiques.';
    ap1.ImageUrl='assets/img/apartments/1.jpg';
    ap1.Price = 1995000;
    ap1.StreetName = '154 Perry Street, #BA';

    const ap2 = new ApartmentInfo();
    ap2.Id = 2;
    ap2.CityName = 'Los Angeles';
    ap2.Description = 'At the heart of Bushwick: live where your HART is. Welcome to 539 Hart Street, a boutique collection of condominium residences.This four-unit townhouse comprises of two duplex apartments and two simplex apartments. Located just twenty minutes from Manhattan, and central to all things Brooklyn, 539 Hart awaits you.    Stepping into the residences via Italian Garofolio Avio doors you will notice the high ceilings, and the amount of light pouring in from the casement windows. Recessed LED lights provide clean lines and uninterrupted heights.';
    ap2.ImageUrl='assets/img/apartments/2.jpg';
    ap2.Price = 925000;
    ap2.StreetName = '539 Hart Street, #GARDEN';

    const ap3 = new ApartmentInfo();
    ap3.Id = 3;
    ap3.CityName = 'Chicago';
    ap3.Description = 'Located in a magnificent prewar Sutton Place building designed by master architect, Rosario Candela, this splendid apartment is planned on a generous and intelligent scale that continues to make prewar construction so desirable.';
    ap3.ImageUrl='assets/img/apartments/3.jpg';
    ap3.Price = 2250000;
    ap3.StreetName = '30 Sutton Place, #5A';

    aps.push(ap1);
    aps.push(ap2);
    aps.push(ap3);

    return new Observable(subscriber => {
      subscriber.next(aps);
      subscriber.complete();
    });
  }
}
