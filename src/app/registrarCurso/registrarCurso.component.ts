import { Component, OnInit } from "@angular/core";
import { CursosService } from "../services/cursos.service";
import { UserService } from "../services/user.service";
import { User } from "../model/user.model";
import { Curso } from "../model/curso.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";

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
    cursos;
    curso:Curso;
    nuevoCurso:Curso;

    constructor( private _cursoService:CursosService, private _userService:UserService, private userService:UserService ) {
        this.cursos = Array<Curso>();
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
        const formData: FormData = new FormData();

        for (let i = 0; i < this.filesToUpload2.length; i++) {
            console.log(this.filesToUpload2);
            formData.append(i.toString(),  this.filesToUpload2[i],  this.filesToUpload2[i].name);
        }
        formData.append("data", JSON.stringify(this.newUser));

        this.userService.addUser(formData).subscribe(
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
