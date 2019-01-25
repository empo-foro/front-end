import {Routes, RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {menuLateral} from './menuLateral/menuLateral.component';
import {mainPage} from './mainPage/mainPage.component';
import {passRec} from './passRec/passRec.component';

const appRoutes: Routes = [
  { path : 'GENERAL', component: mainPage },
  { path : 'RECPASS', component: passRec}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
