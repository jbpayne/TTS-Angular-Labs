import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Data } from '../mocks/default';
import { Address } from '../models/Address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor() { }

  getAddresses(): Observable<Address[]> {
    return of(Data.addresses);
  }

  addAddress(address: Address) {
    Data.addresses.push(address)
  }
}
