import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { Person } from '../../models/Person';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  // Pick one of the components and inject the service.
  constructor(private personService: PersonService) { }

  // Use the ngOnInit() method to get the Person from the service.
  ngOnInit() {
    // this.person = this.personService.getPerson(this.personService.personA);
 
    // Change the call in the component to subscribe() to the call rather than being a synchronous call.
    // call the method to delay before returning the value:
    this.personService.delay().then(() => this.personService.getPeople(this.personService.people).subscribe(people => this.people = people));
    }

  // Create a member variable of type Person
  person: Person;

  // Go back and change your first application and service to return multiple people and display a list.
  people: Person[];

}
