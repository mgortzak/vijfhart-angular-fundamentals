import {Component, OnInit} from '@angular/core';
import {Person} from '../model/person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  persons: Person[];

  gekozenNaam: string = '';
  isVisible: boolean = false;
  currentPerson: Person = new Person();

  newPerson: Person = new Person();

  constructor() {
  }

  ngOnInit() {
    this.persons = [
      new Person(PersonComponent.generateId(), 'Pietje', 'Puk', 'pietje@puk.nl', ['gamen', 'lezen', 'schilderen', 'Netflix']),
      new Person(PersonComponent.generateId(), 'Jantje', 'Beton', 'jantje@beton.nl', ['koken']),
      new Person(PersonComponent.generateId(), 'Klaas', 'Vaak', 'klaas@vaak.nl', ['hardlopen', 'zwemmen'])
    ]
  }

  search(event: any) {
    if (event.ctrlKey && event.key == 'Enter') {
      console.log(event.target.value)

      let person = this.persons.find(p => p.lastName === event.target.value);
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
    this.persons.push(new Person(PersonComponent.generateId(), this.newPerson.firstName, this.newPerson.lastName, this.newPerson.email, this.newPerson.hobbies))

    this.newPerson = new Person()
  }

  addHobby() {
    this.newPerson.hobbies.push('')
  }

  trackHobbies(index, item) {
    return index
  }

  private static generateId() {
    return Math.floor((Math.random() * 100000) + 1);
  }
}
