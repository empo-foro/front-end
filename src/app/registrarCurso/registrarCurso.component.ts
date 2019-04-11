import { Component, OnInit } from "@angular/core";
import { CursosService } from "../services/cursos.service";
import { UserService } from "../services/user.service";
import { User } from "../model/user.model";
import { Curso } from "../model/curso.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {logger} from "codelyzer/util/logger";
import {Router} from '@angular/router';
import * as jQuery from 'jquery';


@Component({
    selector: 'registrar-curso',
    templateUrl: 'registroCurso.component.html',
    providers: [CursosService, UserService ]
})

export class RegistrarCursoComponent implements OnInit{

    newUser:User = new User(null, null, null, null, null, null, null, null,null);
    user:User = new User(null, null, null, null, null, null, null, null,null);
    users = [this.user];
    cursoSeleccionado;
    usutipoalum;
    cursos;
    curso:Curso;
    nuevoCurso:Curso;

    constructor( private _cursoService:CursosService, private _userService:UserService, private userService:UserService, private router: Router ) {
        this.cursos = Array<Curso>();
        this.usutipoalum = Array<User>();
        this.curso = null;
        this.nuevoCurso = new Curso(null,null,null);
    }

    ngOnInit2(): void {

    }

    filesToUpload2: FileList = null;

    handleFileInput2(files: FileList) {
        this.filesToUpload2 = files;
    }

    /*
    uploadFileToActivity() {
        this.userService.postFile(this.fileToUpload).subscribe(data => {
            // do something, if upload success
        }, error => {
            console.log(error);
        });
    }
*/

    addUser2() {

        this.userService.addUser(this.newUser).subscribe(
            (result) => {
                console.log(result.message);
            },
            (error) => {
                console.log(error);
            }
        );
        /*  this.userService.addUser(this.newUser).subscribe(
              (result) => {
                  console.log(result.message);
              },
              (error) => {
                  console.log(error);
              }
          )*/
    }

    ngOnInit(): void {
        /*GET PARA OBTENER TODOS LOS CURSOS*/
        this._cursoService.getCurso()
            .subscribe(
                (result) => {
                    console.log(result);
                    this.cursos = result['data'];
                    console.log(result);
                }, (error) => {
                    console.log(error);
                }


            )

        $(document).ready(function () {
            $('#dtBasicExample').DataTable();
            $('.dataTables_length').addClass('bs-select');
        });

        $(document).ready(function () {
            $('#dtBasicExample').DataTable();
            $('.dataTables_length').addClass('bs-select');
        });

        /*GET PARA OBTENER TODOS LOS USUARIOS QUE SEAN TIPO ALUMNO*/
        this._cursoService.getUsuariosTipoAlumno()
            .subscribe(
                (result) => {
                    console.log(result['data']);
                    for(let i in result["data"]){
                        let id_usuario = result['data'][i]['id_usuario'];
                        let nif=result['data'][i]['nif'];
                        let nombre=result['data'][i]['nombre'];
                        let password=result['data'][i]['password'];
                        let imagen_personal=result['data'][i]['imagen_personal'];
                        let tipo=result['data'][i]['tipo'];
                        let email=result['data'][i]['email'];
                        let biografia=result['data'][i]['biografia'];
                        let id_token=result['data'][i]['id_token'];

                        let usuario:User=new User(id_usuario , nif, nombre, password, imagen_personal, tipo, email, biografia, id_token);

                        this.usutipoalum.push(usuario);
                    }

                    console.log(this.usutipoalum);
                    }, (error)=>{
                    console.log(error);
                }
            )

      /*COMPROBAR TOKEN*/

      let localStorageToken=localStorage.getItem("token");
      let localStorageTipo=localStorage.getItem("tipo");

      if( localStorage != null){
        this.userService.checkToken(localStorageToken, localStorageTipo)
          .subscribe(
            (result)=>{
              //  this.logged=true;
              this.router.navigate(['registrarCurso']);
            },(error) => {
              this.router.navigate(['']);
              console.log("Error al iniciar sesión");
            });

      }else{
        console.log("Error al iniciar sesión");
      }

      $('#alumnos').DataTable({
          "serverSide": true,
          "ajax": "/front-end/src/php/back-end/EstructuraPHP/index2.php?controller=Usuario&operacion=listarUsuarios&tipo=alumno",
          "searching" : true
      });
        $('.dataTables_length').addClass('bs-select');
    }

    filesToUpload: FileList = null;

    handleFileInput(files: FileList) {
        this.filesToUpload = files;
    }

    uploadCSV() {

        var data = {
            "fichero":this.filesToUpload[0],
            "id_curso":this.cursoSeleccionado,
            "tipo":"Alumno"
        };

        var formData = new FormData();
        formData.append("fichero", this.filesToUpload[0]);
        formData.append("id_curso", this.cursoSeleccionado);
        formData.append("tipo", "Alumno");


        this._userService.addUsers(formData).subscribe(
            (result) => {
                console.log(result);
            },
            (error) => {
                console.log(error);
            }
        );

       // var formData: FormData = new FormData(form);


        /*
        this.userService.addUser(formData).subscribe(
            (result) => {
                console.log(result.message);
            },
            (error) => {
                console.log(error);
            }
        );
        */
    }
    /*
        uploadFileToActivity() {
            this.userService.postFile(this.fileToUpload).subscribe(data => {
                // do something, if upload success
            }, error => {
                console.log(error);
            });
        }
    */


    addUser() {
        const formData: FormData = new FormData();

        for (let i = 0; i < this.filesToUpload.length; i++) {
            formData.append(i.toString(),  this.filesToUpload[i],  this.filesToUpload[i].name);
        }
        formData.append("data", JSON.stringify(this.cursos));

        /*  this.userService.addUser(this.newUser).subscribe(
              (result) => {
                  console.log(result.message);
              },
              (error) => {
                  console.log(error);
              }
          )*/
    }
    }
