import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { mainPage } from './mainPage/mainPage.component';
import { menuLateral } from './menuLateral/menuLateral.component';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    menuLateral,
    mainPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
