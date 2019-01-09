import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { mainPage } from './mainPage/mainPage.component';
import { menuLateral } from './menuLateral/menuLateral.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    menuLateral,
    mainPage
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
