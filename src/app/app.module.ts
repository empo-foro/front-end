import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';

import { mainPage } from './mainPage/mainPage.component';
import { menuLateral } from './menuLateral/menuLateral.component';
import { RegistroComponent } from './perfilUsuario/registroUsuario.component';
import { RegistrarCursoComponent } from './registrarCurso/registrarCurso.component';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing';
import { CursosComponentComponent } from './cursos-component/cursos-component.component';


@NgModule({
  declarations: [
    AppComponent,
    menuLateral,
    mainPage,
    CursosComponentComponent,
    RegistroComponent,
    RegistrarCursoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataTablesModule,
    HttpClientModule,
      AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
