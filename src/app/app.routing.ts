import {Routes, RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {menuLateral} from './menuLateral/menuLateral.component';
import {mainPage} from './mainPage/mainPage.component';

const appRoutes: Routes = [
  { path : '', component: mainPage },
  {path : 'menuLateral', component: menuLateral}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
