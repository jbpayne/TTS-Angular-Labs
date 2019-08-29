import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/Person';
import { Data } from '../../mocks/default';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent {

  constructor(private personService: PersonService) {}

  model = new Person('', '');

  submitted = false;

  onSubmit() { 
    this.submitted = true;
    // Data.people.push(this.model);
    this.personService.addPerson(this.model);
  }

  newPerson() {
    this.model = new Person('', '');
  }

}
