import { Component, OnInit } from '@angular/core';
import { postsService } from '../services/posts.service';

import { Router, ActivatedRoute, Params } from '@angular/router';

import {Asignatura} from '../model/asignatura.model';
import {Post} from '../model/post.model';
import {UserService} from '../services/user.service';
import {AsignaturaService} from "../services/asignatura.service";

@Component({
  selector: 'app-listado-post',
  templateUrl: './listado-post.component.html',
  styleUrls: ['./listado-post.component.css']
})

export class ListadoPostComponent implements OnInit {

  constructor(private userService: UserService ,private postService: postsService, private _router: Router, private _activRoute: ActivatedRoute) { }
  id_asignatura;
  listadoposts = [];
  nombreUsuario= "";
  ngOnInit() {
    let localStorageToken = localStorage.getItem( "token" );
  this.userService.getUsuarioByToken(localStorageToken)
    .subscribe(
      (result)=>{

      },(error)=>{

      }
    )
    this._activRoute.params.forEach(
      (arrayParams: Params) => {
        console.dir(arrayParams);

        this.id_asignatura = arrayParams["id_asignatura"];

        this.postService.getListadoPosts(this.id_asignatura)
          .subscribe(
            (result) => {
                this.listadoposts=[];
                for(let i in result["data"]){
                let id_post=result["data"][i]["id_post"]
                let titulo = result["data"][i]["titulo"];
                let cuerpo = result["data"][i]["cuerpo"];
                let fecha = result["data"][i]["fecha"];
                let cerrado = result["data"][i]["cerrado"];
                let id_alumno = result["data"][i]["id_alumno"];
                let id_asignatura = result["data"][i]["id_asignatura"];
                let post:Post = new Post(id_post, titulo, cuerpo, fecha, cerrado, id_alumno,id_asignatura);
                this.listadoposts.push(post)
              }
            }, (error) => {

            }
          );
      });
  }


}
