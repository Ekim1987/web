import { Injectable } from '@angular/core';
 import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoreDetailsService {
  store = {
    name: 'Adrienne Southey',
    school:'Twinkle Kidz Preschool',
    email: 'adrienne@twinklekidzpreschool.co.za',
    mobile: '083 460 7816',
    telephone: '021 975 3581',
    address: '31 Tara Road, Durbanville, Cape Town',
    baseUrl: environment.apiUrl,
    hours : {
      weekdays: 'Monday - Friday: 07h00 - 17h00',
      weekends:'Saturdays - Sundays: Closed',
      holidays: 'Holidays - Open but closed in December'
      },
      headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
  };

  constructor() {}
}
