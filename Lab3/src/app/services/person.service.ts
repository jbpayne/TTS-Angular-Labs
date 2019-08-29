import { Injectable } from '@angular/core';

// In the Service class, reference the Person class from above. 
import { Person } from '../models/Person';
import { Observable, of } from 'rxjs';
import { Data } from '../mocks/default';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  // Create a variable of type Person. 
  personA: Person;
  personB: Person;
  personC: Person;
  people: Person[];

  // In the constructor for the service give it some default values.
  constructor() {
    this.personA = Data.personA;
    this.personB = Data.personB;
    this.personC = Data.personC;
    this.people = Data.people;
   }

// Next, create a basic method to return the person such as getPerson()
/**  getPerson(person: Person): Person {
*    return person;
*  }
*/

// To really see the process of Observables without a long web delay, 
// create this function inside the service class:

async delay(ms = 2000) {
await new Promise(resolve => setTimeout(()=>resolve(), ms));
}

// Change the service call to return an Obervable rather than a Person object.
getPerson(person: Person): Observable<Person> {
  return of(person);
}

// Go back and change your first application and service to return multiple people and display a list.
getPeople(): Observable<Person[]> {
  // return of(Data.people);
  return of(LocalStorageService.getLocalStoragePersonArray());
}

addPerson(person: Person) {
  // Data.people.push(person);
  let personArray = LocalStorageService.getLocalStoragePersonArray();
  personArray.push(person);
  LocalStorageService.setLocalStoragePersonArray(personArray);
}

}
