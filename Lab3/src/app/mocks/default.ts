import { Address } from '../models/Address';
import { states } from '../models/states';
import { Person } from '../models/Person';

export class Data {

  static addressA: Address = new Address("123", "Main", "St.", "Hartford", states.Connecticut, "06103");
  static addresses: Address[] = [Data.addressA];

  static personA: Person = new Person("Abe", "Froman", ["Jarlsberg", "Brie"]);
  static personB: Person = new Person("Ferris", "Bueller");
  static personC: Person = new Person("Cameron", "Frye");

  static people: Person[] = [Data.personA, Data.personB, Data.personC];


}
