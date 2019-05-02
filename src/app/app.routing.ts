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

/* Rutas */
const appRoutes: Routes = [

    {path: '', component: mainPage},
    {path: 'home', component: RegistroComponent},
    {path: 'control-panel', component: ControlPanelComponent},
    {path: 'postsListado/:id_asignatura', component: ListadoPostComponent},
    {path: 'post/:id_post', component: VistaPostComponent},
    {path: 'user-profile', component: RegistroComponent},

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}