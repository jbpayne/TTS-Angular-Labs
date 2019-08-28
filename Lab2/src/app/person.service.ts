import { Injectable } from '@angular/core';

// In the Service class, reference the Person class from above. 
import { Person } from './Person';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  // Create a variable of type Person. 
  personA: Person;

  // In the constructor for the service give it some default values.
  constructor() {
    this.personA = new Person("Abe", "Froman");
   }

// Next, create a basic method to return the person such as getPerson()
/**  getPerson(person: Person): Person {
*    return person;
*  }
*/

// To really see the process of Observables without a long web delay, 
// create this function inside the service class:

async delay(ms: number) {
await new Promise(resolve => setTimeout(()=>resolve(), ms));
}

// Change the service call to return an Obervable rather than a Person object.
getPerson(person: Person): Observable<Person> {
  return of(person);
}

}
