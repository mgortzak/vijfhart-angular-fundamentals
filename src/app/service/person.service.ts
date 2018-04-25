import {Injectable} from '@angular/core';
import {Person} from "../model/person.model";

@Injectable()
export class PersonService {

  private persons: Person[] = [
    new Person(PersonService.generateId(), 'Pietje', 'Puk', 'pietje@puk.nl', ['gamen', 'lezen', 'schilderen', 'Netflix']),
    new Person(PersonService.generateId(), 'Jantje', 'Beton', 'jantje@beton.nl', ['koken']),
    new Person(PersonService.generateId(), 'Klaas', 'Vaak', 'klaas@vaak.nl', ['hardlopen', 'zwemmen'])
  ]

  constructor() {
  }

  getPersons() {
    return this.persons
  }

  getPersonByLastName(name: string) {
    return this.persons.find(p => p.lastName === name)
  }

  addPerson(person: Person) {
    person.id = PersonService.generateId()

    this.persons.push(person)
  }


  private static generateId() {
    return Math.floor((Math.random() * 100000) + 1);
  }
}
