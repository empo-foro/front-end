import {Routes, RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {menuLateral} from './menuLateral/menuLateral.component';
import {mainPage} from './mainPage/mainPage.component';
import {RegistrarCursoComponent} from './registrarCurso/registrarCurso.component';

const appRoutes: Routes = [
  { path : '', component: mainPage },
  {path : 'menuLateral', component: menuLateral},
  {path : 'registrarCurso', component: RegistrarCursoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
