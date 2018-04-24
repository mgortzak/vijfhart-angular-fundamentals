import {Component, OnInit} from '@angular/core';
import {Person} from "../domain/person";

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.css']
})
export class BotComponent implements OnInit {

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


  // function zoekPersoon(person: Person)
  // {
  //   return true;
  // }

  doubleClick(id: number) {

    let person = this.persons.find(p => p.id === id);
    console.log('double click: ' + person.lastName);
  }

}
