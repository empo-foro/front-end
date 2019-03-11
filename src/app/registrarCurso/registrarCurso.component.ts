import { Component, OnInit } from "@angular/core";
import { CursosService } from "../cursos.service";
import { Curso } from "../model/curso.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
    selector: 'registrar-curso',
    templateUrl: 'registroCurso.component.html',
    providers: [CursosService]
})

export class RegistrarCursoComponent implements OnInit{
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
                    var cursos = result["resposta"];
                    console.log(result);
                }, (error) => {
                    console.log(error);
                }
            )
        }
    }
