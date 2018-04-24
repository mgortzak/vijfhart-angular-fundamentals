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
      new Person('Pietje', 'Puk', 'pietje@puk.nl', ['gamen', 'lezen', 'schilderen', 'Netflix']),
      new Person('Jantje', 'Beton', 'jantje@beton.nl', ['koken']),
      new Person('Klaas', 'Vaak', 'klaas@vaak.nl', ['hardlopen', 'zwemmen'])
    ]
  }

}
