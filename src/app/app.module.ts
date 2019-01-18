import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { mainPage } from './mainPage/mainPage.component';
import { menuLateral } from './menuLateral/menuLateral.component';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app.routing';
import {passRec} from './passRec/passRec.component';


@NgModule({
  declarations: [
    AppComponent,
    menuLateral,
    mainPage,
      passRec
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
