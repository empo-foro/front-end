import {Routes, RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {menuLateral} from './menuLateral/menuLateral.component';
import { mainPage } from './mainPage/mainPage.component';
import { RegistrarCursoComponent } from './registrarCurso/registrarCurso.component';
import { ListadoPostComponent } from './listado-post/listado-post.component';
import { VistaPostComponent } from './vista-post/vista-post.component';

const appRoutes: Routes = [

  { path : '', component: mainPage},
  { path : 'registrarCurso', component: RegistrarCursoComponent},
  { path: 'postsListado/:id_asignatura', component: ListadoPostComponent},
  { path : 'post/:id_post', component: VistaPostComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
