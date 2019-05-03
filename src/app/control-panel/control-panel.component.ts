import {Component, OnInit} from '@angular/core';
import {CursosService} from '../services/cursos.service';
import {UserService} from '../services/user.service';
import {User} from '../model/user.model';
import {Curso} from '../model/curso.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {logger} from 'codelyzer/util/logger';
import {Router} from '@angular/router';
import * as jQuery from 'jquery';


@Component({
    selector: 'control-panel',
    templateUrl: 'control-panel.component.html',
    styleUrls: ['./control-panel.component.css'],
    providers: [CursosService, UserService]
})

export class ControlPanelComponent implements OnInit {

    nuevoUsuario: User = new User(null, null, null, null, null, "Alumno", null, null, null);
    usuario: User = new User(null, null, null, null, null, null, null, null, null);
    cursoSeleccionado;
    usuarios;
    cursos;
    curso;
    nuevoCurso: Curso;

    constructor(private _cursoService: CursosService, private _userService: UserService, private userService: UserService, private router: Router) {
        this.cursos = Array<Curso>();
        this.usuarios = Array<User>();
        this.nuevoCurso = new Curso(null, null, null);
    }

    archivos: FileList = null;

    handleFileInput2(files: FileList) {
        this.archivos = files;
    }

    addUsuario() {

        var data = new Array();

        if(this.nuevoUsuario.tipo === "Alumno") {

            data.push(this.nuevoUsuario);
            let aux = {"id_curso":this.curso};
            data.push(aux);

        } else {

            data.push(this.nuevoUsuario);

        }

        this.userService.addUser(data).subscribe(
            (result) => {

                this.notifier.notify( 'error', 'Datos incorrectos' );

            },
            (error) => {
                console.log(error);
            }
        );

    }

    eliminarUsuario(id) {
        this.userService.eliminarUsuario(id).subscribe(
            (result) => {
                console.log(result['message']);
            },

            (error) => {
                console.log(error);
            }
        );
    }

    ngOnInit(): void {

        /* Consulta que nos devuelve todos los cursos de la base de datos */
        this._cursoService.getCurso()
            .subscribe(
                (result) => {
                    this.cursos = result['data'];
                }, (error) => {
                    console.log(error);
                }
            );

        /* Consulta con la que recibiremos todos los usuarios que sea de tipo Alumno */
        this._cursoService.getUsuariosTipoAlumno()
            .subscribe(
                (result) => {
                    for (let i in result['data']) {

                        let id_usuario = result['data'][i]['id_usuario'];
                        let nif = result['data'][i]['nif'];
                        let nombre = result['data'][i]['nombre'];
                        let password = result['data'][i]['password'];
                        let imagen_personal = result['data'][i]['imagen_personal'];
                        let tipo = result['data'][i]['tipo'];
                        let email = result['data'][i]['email'];
                        let biografia = result['data'][i]['biografia'];
                        let id_token = result['data'][i]['id_token'];

                        let usuario: User = new User(id_usuario, nif, nombre, password, imagen_personal, tipo, email, biografia, id_token);

                        this.usuarios.push(usuario);

                    }


                }, (error) => {
                    console.log(error);
                }
            );

        /* Recogemos los datos del local storage para comprobar si ha iniciado sesión con anterioridad */
        if (localStorage != null) {

            let localStorageToken = localStorage.getItem('token');
            let localStorageTipo = localStorage.getItem('tipo');

            this.userService.checkToken(localStorageToken, localStorageTipo)
                .subscribe(
                    (result) => {
                        this.router.navigate(['control-panel']);
                    }, (error) => {
                        this.router.navigate(['']);
                        console.log('Error al iniciar sesión');
                    });

        } else {
            console.log('Error al iniciar sesión');
        }

        $('#listaAlumnos').DataTable();

    }

    filesToUpload: FileList = null;

    handleFileInput(files: FileList) {
        this.filesToUpload = files;
    }

    uploadCSV() {

        var data = {
            'fichero': this.filesToUpload[0],
            'id_curso': this.cursoSeleccionado,
            'tipo': 'Alumno'
        };

        var formData = new FormData();
        formData.append('fichero', this.filesToUpload[0]);
        formData.append('id_curso', this.cursoSeleccionado);
        formData.append('tipo', 'Alumno');


        this._userService.addUsers(formData).subscribe(
            (result) => {
            },
            (error) => {

            }
        );

    }

    addUser() {
        const formData: FormData = new FormData();

        for (let i = 0; i < this.filesToUpload.length; i++) {
            formData.append(i.toString(), this.filesToUpload[i], this.filesToUpload[i].name);
        }
        formData.append('data', JSON.stringify(this.cursos));

    }
}
