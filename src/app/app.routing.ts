import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Componentes */
import {menuLateral} from './menuLateral/menuLateral.component';
import {mainPage} from './mainPage/mainPage.component';
import {RegistrarCursoComponent} from './registrarCurso/registrarCurso.component';
import {RegistroComponent} from './registrarUsuario/registroUsuario.component';

/* Rutas */
const appRoutes: Routes = [
  { path : '',
    component: mainPage
  },
  { path : 'home',
    component: menuLateral,
    children:
    [
        {
          path : 'registrarCurso',
          component: RegistrarCursoComponent
        },
        { path: 'registroUsuario',
          component: RegistroComponent
        }
    ]
  }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }
