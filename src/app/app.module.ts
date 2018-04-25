import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {PersonComponent} from './person/person.component';
import {FormsModule} from "@angular/forms";
import {PersonService} from "./service/person.service";


@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
