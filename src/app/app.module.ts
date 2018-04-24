import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {BotComponent} from './bot/bot.component';
import {HouseService} from "./services/house.service";


@NgModule({
  declarations: [
    AppComponent,
    BotComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [HouseService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
