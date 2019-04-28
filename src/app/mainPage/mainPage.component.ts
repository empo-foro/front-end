import {Component} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {OnInit} from '@angular/core';

/* Componente de las alertas */
import { NotifierService } from 'angular-notifier';

/* Services y models */
import {UserService} from '../services/user.service';
import {User} from '../model/user.model';
import {Session} from '../model/session.model';

@Component({
    selector: 'main-page',
    templateUrl: './mainPage.component.html',
    styleUrls: ['./mainPage.component.css'],
    providers: [UserService]

})

export class mainPage implements OnInit {

    nuevoUsuario: User = new User(null, null, null, null, null, 'Usuario', null, null, null);

    private readonly notifier: NotifierService;

    constructor(private service: UserService, private router: Router,  notifierService: NotifierService ) {
        this.notifier = notifierService;
    }

    ngOnInit(): void {

        let localStorageToken = localStorage.getItem('token');
        let localStorageTipo = localStorage.getItem('tipo');

        if (localStorageToken != null && localStorageTipo != null) {
            this.service.checkToken(localStorageToken, localStorageTipo)
                .subscribe(
                    (result) => {

                        if (localStorageTipo === 'Centro') {
                            this.router.navigate(['control-panel']);
                        } else if (localStorageTipo === 'Usuario') {
                            this.router.navigate(['home']);
                        }

                    }, (error) => {

                        this.router.navigate(['']);

                    }
                );
        }

        $('#recPass').on('shown.bs.modal', function () {
            $('#myInput').trigger('focus')
        })

    }

    login() {
        this.service.login(this.nuevoUsuario.email, this.nuevoUsuario.tipo, this.nuevoUsuario.password)
            .subscribe(
                (result) => {

                    let id_token = result.data['id_token'];
                    let id_usuario = result.data['id_usuario'];
                    let biografia = result.data['biografia'];
                    let email = result.data['biografia'];
                    let imagen_personal = result.data['imagen_personal'];
                    let nif = result.data['nif'];
                    let nombre = result.data['nombre'];
                    let password = result.data['password'];
                    let tipo = result.data['tipo'];

                    let user: User = new User(id_usuario, nif, nombre, password, imagen_personal, tipo, email, biografia, id_token);
                    let sesion: Session = new Session(id_token, user);
                    localStorage.setItem('token', id_token);
                    localStorage.setItem('tipo', this.nuevoUsuario.tipo);

                    if(this.nuevoUsuario.tipo === "Centro") {
                        this.router.navigate(['control-panel']);
                    } else if (this.nuevoUsuario.tipo === "Usuario") {
                        this.router.navigate(['home']);
                    } else {
                    }

                },
                (error) => {
                    this.notifier.notify( 'error', 'Datos incorrectos' );
                }
            );
    }
}
