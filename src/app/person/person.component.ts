import {Component, OnInit} from '@angular/core';
import {Person} from "../domain/person";

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

  constructor() {
  }

  ngOnInit() {
    this.persons = [
      new Person(1, 'Pietje', 'Puk', 'pietje@puk.nl', ['gamen', 'lezen', 'schilderen', 'Netflix']),
      new Person(2, 'Jantje', 'Beton', 'jantje@beton.nl', ['koken']),
      new Person(3, 'Klaas', 'Vaak', 'klaas@vaak.nl', ['hardlopen', 'zwemmen'])
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
}
