import { Component, OnInit } from "@angular/core";
import { CursosService } from "../services/cursos.service";
import { Curso } from "../model/curso.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
    selector: 'registrar-curso',
    templateUrl: 'registroCurso.component.html',
    providers: [CursosService]
})

export class RegistrarCursoComponent implements OnInit{

    cursoSeleccionado;
    cursos;
    curso:Curso;
    nuevoCurso:Curso;

    constructor( private _cursoService:CursosService) {
        this.cursos = Array<Curso>();
        this.curso = null;
        this.nuevoCurso = new Curso(null,null,null);
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

    function() {
        const formData: FormData = new FormData();

        for (let i = 0; i < this.filesToUpload.length; i++) {
            formData.append(i.toString(),  this.filesToUpload[i],  this.filesToUpload[i].name);
            console.log(formData);

        }
        formData.append("id_curso", JSON.stringify(this.cursoSeleccionado));
        formData.append("tipo", JSON.stringify("alumno"));

        console.log(formData);
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
