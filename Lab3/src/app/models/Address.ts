import { states } from './states';

export class Address {
  number: string;
  street: string;
  streetType: string;
  city: string;
  state: states;
  zip: string;

  constructor(number: string, street: string, streetType: string, city: string, state: states, zip: string) {
    this.number = number;
    this.street = street;
    this.streetType = streetType;
    this.city = city;
    this.state = state;
    this.zip = zip;
  }

}