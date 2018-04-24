import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {PersonComponent} from './person/person.component';
import {AddPersonComponent} from './add-person/add-person.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    AddPersonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
