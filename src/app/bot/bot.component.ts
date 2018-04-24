import {Component, OnInit} from '@angular/core';
import {Person} from "../domain/person";

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.css']
})
export class BotComponent implements OnInit {

  pietje: Person;
  jantje: Person;

  constructor() {
  }

  ngOnInit() {
    this.pietje = new Person();
    this.pietje.firstName = 'Pietje';
    this.pietje.lastName = 'Puk';
    this.pietje.email = 'pietje@puk.nl';
    this.pietje.hobbies = ['gamen', 'lezen'];

    this.jantje = new Person();
    this.jantje.firstName = 'Jantje';
    this.jantje.lastName = 'Beton';
    this.jantje.email = 'jantje@beton.nl';
    this.jantje.hobbies = ['koken', 'spelen'];

    console.log(this.pietje);
    console.log(this.jantje);
  }

}
