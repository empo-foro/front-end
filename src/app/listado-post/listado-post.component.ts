import { Component, OnInit } from '@angular/core';
import { postsService } from '../services/posts.service';

import { Router, ActivatedRoute, Params } from '@angular/router';

import {Asignatura} from '../model/asignatura.model';
import {Post} from '../model/post.model';

@Component({
  selector: 'app-listado-post',
  templateUrl: './listado-post.component.html',
  styleUrls: ['./listado-post.component.css']
})
export class ListadoPostComponent implements OnInit {

  constructor(private postService: postsService, private _router: Router, private _activRoute: ActivatedRoute) { }
  id_asignatura;
  listadoposts = [];

  ngOnInit() {

    this._activRoute.params.forEach(
      (arrayParams: Params) => {
        console.dir(arrayParams);

        this.id_asignatura = arrayParams["id_asignatura"];

        this.postService.getListadoPosts(this.id_asignatura)
          .subscribe(
            (result)=>{this.listadoposts=[];
             for(var i in result.data){
                let id_post=result.data[i].id_post
                let titulo = result.data[i].titulo;
                let cuerpo = result.data[i].cuerpo;
                let fecha = result.data[i].fecha;
                let cerrado = result.data[i].cerrado;
                let id_alumno = result.data[i].id_alumno;
                let id_asignatura = result.data[i].id_asignatura;
                let post:Post = new Post(id_post, titulo, cuerpo, fecha, cerrado, id_alumno,id_asignatura);
                this.listadoposts.push(post)
              }
            },(error)=>{

            }
          )
      })
  }


}