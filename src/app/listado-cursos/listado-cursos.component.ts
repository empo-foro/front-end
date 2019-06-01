import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {postsService} from "../services/posts.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AsignaturaService} from "../services/asignatura.service";
import {Asignatura} from '../model/asignatura.model';

@Component({
  selector: 'app-listado-cursos',
  templateUrl: './listado-cursos.component.html',
  styleUrls: ['./listado-cursos.component.css']
})
export class ListadoCursosComponent implements OnInit {
  arrayAsignaturas = [];
  constructor(private userService: UserService, private asignaturaService:AsignaturaService ,private postService: postsService, private _router: Router, private _activRoute: ActivatedRoute) { }

  ngOnInit() {
    let localStorageToken = localStorage.getItem( "token" );

    this.asignaturaService.getAsignaturaUserByToken(localStorageToken)
        .subscribe(
            (result) => {
              this.arrayAsignaturas=[];
              for(let i in result["data"]) {
                let id_asignatura=result["data"][i]["id_asignatura"];
                let nombre=result["data"][i]["nombre"];
                let id_curso = result["data"][i]["id_curso"];
                let asignatura:Asignatura = new Asignatura(id_asignatura,nombre,id_curso);
                this.arrayAsignaturas.push(asignatura);
              }
            }, (error) => {

            }
        );
  }

}
