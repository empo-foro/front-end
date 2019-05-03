import { Component, OnInit } from '@angular/core';
import {postsService} from '../services/posts.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Post} from '../model/post.model';

@Component({
  selector: 'app-vista-post',
  templateUrl: './vista-post.component.html',
  styleUrls: ['./vista-post.component.css']
})
export class VistaPostComponent implements OnInit {
  id_post="";
  id="";
  titulo=" ";
  cuerpo=" ";
  fecha=" ";
  cerrado=" ";
  id_alumno=" ";
  id_asignatura=" ";

  constructor(private postService: postsService, private _router: Router, private _activRoute: ActivatedRoute) { }

  ngOnInit() {
    this._activRoute.params.forEach(
      (arrayParams: Params) => {

        this.id_post = arrayParams["id_post"];
        this.postService.getPostById(this.id_post)
          .subscribe(
            (result)=>{
              console.log(result["data"])
              this.id=result["data"]["id_post"];
              this.titulo = result["data"]["titulo"];
              this.cuerpo = result["data"]["cuerpo"];
              this.fecha = result["data"]["fecha"];
              this.cerrado = result["data"]["cerrado"];
              this.id_alumno = result["data"]["id_alumno"];
              this.id_asignatura = result["data"]["id_asignatura"];
              console.log(this.titulo)
              let post:Post = new Post(this.id, this.titulo, this.cuerpo, this.fecha, this.cerrado, this.id_alumno, this.id_asignatura);

            },(error)=>{

            }
          )
      })
  }

}
