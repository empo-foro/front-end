import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/* Componentes */

import { mainPage } from './mainPage/mainPage.component';
import { menuLateral } from './menuLateral/menuLateral.component';
import { RegistroComponent } from './registrarUsuario/registroUsuario.component';
import { RegistrarCursoComponent } from './registrarCurso/registrarCurso.component';
import { CursosComponentComponent } from './cursos-component/cursos-component.component';

/* Imports para las rutas */

import { AppRoutingModule } from './app.routing';
import { routing, appRoutingProviders } from './app.routing';

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
    HttpClientModule,
    routing,
      AlertModule.forRoot()
  ],
  providers: [
      appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
