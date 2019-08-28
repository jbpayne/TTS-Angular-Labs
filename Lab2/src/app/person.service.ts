import { Injectable } from '@angular/core';

// In the Service class, reference the Person class from above. 
import { Person } from './Person';

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
  getPerson(person: Person): Person {
    return person;
  }
}
