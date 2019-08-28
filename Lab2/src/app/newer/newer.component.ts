import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../Person';

@Component({
  selector: 'app-newer',
  templateUrl: './newer.component.html',
  styleUrls: ['./newer.component.css']
})
export class NewerComponent implements OnInit {

  // Pick one of the components and inject the service.
  constructor(private personService: PersonService) { }

  // Use the ngOnInit() method to get the Person from the service.
  ngOnInit() {
    // this.person = this.personService.getPerson(this.personService.personA);
 
    // Change the call in the component to subscribe() to the call rather than being a synchronous call.
    // call the method to delay before returning the value:
    this.personService.delay(4000).then(() => this.personService.getPerson(this.personService.personA).subscribe(person => this.person = person));
    }

  // Create a member variable of type Person
  person: Person;

}
