/* Componentes importados */
import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';

/* Servicios importados */
import {CursosService} from '../services/cursos.service';
import {UserService} from '../services/user.service';
import {AsignaturaService} from '../services/asignatura.service';

/* Modelos importados */
import {Curso} from '../model/curso.model';
import {User} from '../model/user.model';
import {Asignatura} from '../model/asignatura.model';

/* Componente de las alertas */
import {NotifierService} from 'angular-notifier';

@Component({
    selector: 'control-panel',
    templateUrl: 'control-panel.component.html',
    styleUrls: ['./control-panel.component.css'],
    providers: [CursosService, UserService]
})

export class ControlPanelComponent implements OnInit {

    /** Esta variable contiene los datos del formulario de registro de usuarios */
    nuevoUsuario: User = new User(null, null, null, null, null, 'Alumno', null, null, null);
    /** Contiene el identificado del curso del formulario de registro masivo */
    cursoSeleccionado;
    /** Array con los cursos que existen dentro de la base de datos */
    cursos = Array<Curso>();
    /** En esta variable guardaremos el curso seleccionado en el que vamos a registrar al usuario */
    cursoUsuario = new Curso(null, null, null);
    /** Esta variable contiene los datos del formulario de registro de curso */
    nuevoCurso: Curso = new Curso(null, null, 1);
    /** Esta variable contiene los datos del formulario del registro de asignatura */
    nuevaAsignatura: Asignatura = new Asignatura(null, null, null);

    /** Variables que utilizamos con el datatables */
    dtOption: DataTables.Settings = {};
    usuarios: User[] = [];
    dtTrigger: Subject<User> = new Subject();

    /** Variable que utilizaremos para las notificaciones */
    private readonly notifier: NotifierService;

    constructor(private http: HttpClient, private _cursoService: CursosService, private _userService: UserService, private _asignaturaService:AsignaturaService, private router: Router, notifierService: NotifierService) {
        this.notifier = notifierService;
    }

    /**
     * Función que inicializara el datatables
     */
    datatables() {
        this.dtOption = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
        this.http.get('http://empo.alwaysdata.net/back-end/EstructuraPHP/index2.php?controller=Usuario&operacion=listarUsuarios&tipo=alumno', {headers: new HttpHeaders({'Content-Type': 'application/json'})})
            .subscribe(result => {
                let users = result['data'];
                users.map(object => {
                    let alumno: User = new User(object['id_usuario'], object['nif'], object['nombre'], object['password'], object['imagen_personal'], object['tipo'], object['email'], object['biografia'], object['id_token']);
                    this.usuarios.push(alumno);
                });
                this.dtTrigger.next();
            });
    }

    ngOnInit(): void {

        this.datatables();

        /* Consulta que nos devuelve todos los cursos de la base de datos */
        this._cursoService.getCurso()
            .subscribe(
                (result) => {
                    this.cursos = result['data'];
                }, (error) => {
                    console.log(error);
                }
            );

        /* Recogemos los datos del local storage para comprobar si ha iniciado sesión con anterioridad */
        if (localStorage != null) {
            let localStorageToken = localStorage.getItem('token');
            let localStorageTipo = localStorage.getItem('tipo');
            this._userService.checkToken(localStorageToken, localStorageTipo)
                .subscribe(
                    () => {
                        this.router.navigate(['control-panel']);
                    }, () => {
                        this.router.navigate(['']);
                        console.log('Error al iniciar sesión');
                    });
        } else {
            console.log('Error al iniciar sesión');
        }

    }

    /**
     * Función que ejecutamos al registrar un usuario
     */
    addUsuario() {
        let data = [];
        if (this.nuevoUsuario.tipo === 'Alumno') {
            data.push(this.nuevoUsuario);
            let aux = {'id_curso': this.cursoUsuario};
            data.push(aux);
        } else {
            data.push(this.nuevoUsuario);
        }
        this._userService.addUser(data).subscribe(
            (result) => {
                this.notifier.notify('success', 'Usuario creado correctamente');
                let object = result['data'];
                if (object['tipo'] === 'Alumno') {
                    let alumno: User = new User(object['id_usuario'], object['nif'], object['nombre'], object['password'], object['imagen_personal'], object['tipo'], object['email'], object['biografia'], object['id_token']);
                    this.usuarios.push(alumno);
                }
            },
            () => {
                this.notifier.notify('error', 'Ha ocurrido un error al crear usuario');
            }
        );
    }

    /**
     * Función que ejecutamos cuando clicamos en el icono de borrar usuario
     * @param id Número identificador del usuario
     */
    eliminarUsuario(id) {
        this._userService.eliminarUsuario(id).subscribe(
            () => {
                this.notifier.notify('success', 'Usuario eliminado correctamente');
                let index = this.usuarios.findIndex(user => user.id_usuario === id);
                this.usuarios.splice(index, 1);
            },
            () => {
                this.notifier.notify('error', 'Ha ocurrido un error al eliminar usuario');
            }
        );
    }

    /** Variable donde guardaremos el fichero que suba el usuario */
    filesToUpload: FileList = null;
    /**
     * Esta función que asigna el fichero seleccionado en la vista a la variable filesToUpload
     * @param files FileList Ficheros subidos por el usuario en el formulario
     */
    handleFileInput(files: FileList) {
        this.filesToUpload = files;
    }

    /**
     * Función que enviará los datos para realizar una creación masiva de usuarios
     */
    uploadCSV() {
        let formData = new FormData();
        formData.append('fichero', this.filesToUpload[0]);
        formData.append('id_curso', this.cursoSeleccionado);
        formData.append('tipo', 'Alumno');
        this._userService.addUsers(formData).subscribe(
            () => {
                this.notifier.notify('success', 'Usuarios creados correctamente');
            },
            () => {
                this.notifier.notify('error', 'Ha ocurrido un error al crear usuarios');
            }
        );
    }

    registrarCurso() {
        this._cursoService.crearCurso(this.nuevoCurso).subscribe(
            (result) => {
                this.notifier.notify('success', 'Curso creado correctamente');
                let object = result["data"];
                let curso = new Curso(object["id_curso"], object["nombre"], 1);
                this.cursos.push(curso);
            },
            () => {
                this.notifier.notify('error', 'Ha ocurrido un error al crear curso');
            }
        )
    }

    registrarAsignatura() {
        this._asignaturaService.create(this.nuevaAsignatura).subscribe(
            () => {
                this.notifier.notify('success', 'Asignatura creada correctamente');
            },
            () => {
                this.notifier.notify('error', 'Ha ocurrido un error al crear asignatura');
            }
        );
    }

}
