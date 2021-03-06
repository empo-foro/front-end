import {NgModule} from '@angular/core';
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

/* Componentes */
import {menuLateral} from './menuLateral/menuLateral.component';
import {ListadoPostComponent} from './listado-post/listado-post.component';
import {VistaPostComponent} from './vista-post/vista-post.component';
import {mainPage} from './mainPage/mainPage.component';
import {ControlPanelComponent} from './control-panel/control-panel.component';
import {RegistroComponent} from './perfilUsuario/registroUsuario.component';
import {CrearPostComponent} from './crear-post/crear-post.component';
import {ListadoCursosComponent} from "./listado-cursos/listado-cursos.component";

/* Rutas */
const appRoutes: Routes = [

    {path: '', component: mainPage},
    {path: 'home', component: RegistroComponent},
    {path: 'control-panel', component: ControlPanelComponent},
    {path: 'postsListado/:id_asignatura', component: ListadoPostComponent},
    {path: 'post/:id_post', component: VistaPostComponent},
    {path: 'user-profile', component: RegistroComponent},
    {path: 'crear-post/:id_asignatura', component: CrearPostComponent},
    {path: 'listado-cursos', component: ListadoCursosComponent},
    { path: '',   redirectTo: '/user-profile', pathMatch: 'full' },
    { path: '**', component: RegistroComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
