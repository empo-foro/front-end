import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AlertModule} from 'ngx-bootstrap';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

/* Componentes */
import {mainPage} from './mainPage/mainPage.component';
import {menuLateral} from './menuLateral/menuLateral.component';
import {RegistroComponent} from './perfilUsuario/registroUsuario.component';
import {ControlPanelComponent} from './control-panel/control-panel.component';
import {DataTablesModule} from 'angular-datatables';
import {CursosComponentComponent} from './cursos-component/cursos-component.component';
import {ListadoPostComponent} from './listado-post/listado-post.component';
import {VistaPostComponent} from './vista-post/vista-post.component';
import { PaginaPricipalComponent } from './pagina-pricipal/pagina-pricipal.component';
import { CrearPostComponent } from './crear-post/crear-post.component';
/* Imports para las rutas */
import {AppRoutingModule} from './app.routing';
import {routing, appRoutingProviders} from './app.routing';

/* Componente y configuración para las notificaciones */
import {NotifierModule, NotifierOptions } from 'angular-notifier';
const notifierDefaultOptions: NotifierOptions = {
    position: {
        horizontal: {
            position: 'right',
        },
        vertical: {
            position: 'bottom',
        }
    },
    theme: 'material',
    behaviour: {
        autoHide: 2000,
        onMouseover: 'pauseAutoHide',
    }
};


@NgModule({
    declarations: [
        AppComponent,
        menuLateral,
        mainPage,
        CursosComponentComponent,
        RegistroComponent,
        ControlPanelComponent,
        ListadoPostComponent,
        VistaPostComponent,
        PaginaPricipalComponent,
        CrearPostComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        DataTablesModule,
        HttpClientModule,
        routing,
        NotifierModule.withConfig(notifierDefaultOptions),
        AlertModule.forRoot()
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}


