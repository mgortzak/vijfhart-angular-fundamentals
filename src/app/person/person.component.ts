import {Component, OnInit} from '@angular/core';
import {Person} from '../model/person.model';
import {PersonService} from "../service/person.service";
import {Hobby} from "../model/hobby.model";
import {Database} from "../helper/database.helper";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  persons: Person[]
  gekozenNaam: string = '';
  isVisible: boolean = false;
  currentPerson: Person = new Person();

  newPerson: Person = new Person();

  constructor(private personService: PersonService) {
  }

  ngOnInit() {
    this.persons = this.personService.getPersons()
  }

  search(event: any) {
    if (event.ctrlKey && event.key == 'Enter') {
      console.log(event.target.value)

      let person = this.personService.getPersonByLastName(event.target.value);
      if (person != null) {
        this.currentPerson = person
        this.isVisible = true
      }
      else {
        this.currentPerson = new Person()
        this.isVisible = false;
      }
    }
  }

  add() {
    this.personService.addPerson(this.newPerson)
    this.newPerson = new Person()
  }

  addHobby() {
    this.newPerson.hobbies.push(new Hobby(Database.generateId(), ''))
  }

  trackHobbies(index, item) {
    return index
  }
}
