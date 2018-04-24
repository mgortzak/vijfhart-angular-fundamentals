import {Component, OnInit} from '@angular/core';
import {Person} from "../domain/person";

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.css']
})
export class BotComponent implements OnInit {

  pietje: Person;

  constructor() {
  }

  ngOnInit() {
    this.pietje = new Person()
    this.pietje.firstName = 'Pietje';
    this.pietje.lastName = 'Puk';
    this.pietje.email = 'pietje@puk.nl';
    this.pietje.hobbies = ['gamen', 'lezen', 'schilderen', 'Netflix'];

    this.pietje.hobbies.push('zwemmen')
  }

}
