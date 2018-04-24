import {Component, OnInit} from '@angular/core';
import {Person} from "../domain/person";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  persons: Person[];

  constructor() {
  }

  ngOnInit() {
    this.persons = [
      new Person(1, 'Pietje', 'Puk', 'pietje@puk.nl', ['gamen', 'lezen', 'schilderen', 'Netflix']),
      new Person(2, 'Jantje', 'Beton', 'jantje@beton.nl', ['koken']),
      new Person(3, 'Klaas', 'Vaak', 'klaas@vaak.nl', ['hardlopen', 'zwemmen'])
    ]
  }


  doubleClick(event: any, id: number) {

    console.log(event.ctrlKey)
    console.log(event.altKey)
    console.log(event.shiftKey)

    let person = this.persons.find(p => p.id === id);
    console.log('double click: ' + person.lastName);
  }
}
