import {Injectable} from '@angular/core';
import {Person} from "../model/person.model";
import {Hobby} from "../model/hobby.model";
import {Database} from "../helper/database.helper";

@Injectable()
export class PersonService {

  private persons: Person[] = [
    new Person(Database.generateId(), 'Pietje', 'Puk', 'pietje@puk.nl', [
      new Hobby(Database.generateId(), 'gamen'),
      new Hobby(Database.generateId(), 'Netflix'),
      new Hobby(Database.generateId(), 'programmeren'),
      new Hobby(Database.generateId(), 'lezen'),
    ]),
    new Person(Database.generateId(), 'Jantje', 'Beton', 'jantje@beton.nl', [
      new Hobby(Database.generateId(), 'koken')
    ]),
    new Person(Database.generateId(), 'Klaas', 'Vaak', 'klaas@vaak.nl', [
      new Hobby(Database.generateId(), 'hardlopen'),
      new Hobby(Database.generateId(), 'zwemmen')
    ])
  ];

  constructor() {
  }

  getPersons() {
    return this.persons
  }

  getPersonByLastName(name: string) {
    return this.persons.find(p => p.lastName === name)
  }

  addPerson(person: Person) {
    person.id = Database.generateId();
    this.persons.push(person)
  }


}
