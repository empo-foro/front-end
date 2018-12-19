import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { menuLateral } from './menuLateral/menuLateral.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    menuLateral
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
