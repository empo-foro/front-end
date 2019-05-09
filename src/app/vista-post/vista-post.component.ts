import { Component, OnInit } from '@angular/core';
import {postsService} from '../services/posts.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Post} from '../model/post.model';
import {Respuesta} from "../model/respuesta.model";
import {forEach} from "@angular/router/src/utils/collection";

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
  fecha;
  cerrado=" ";
  id_alumno=" ";
  id_asignatura=" ";

    respuestas = [];


    constructor(private postService: postsService, private _router: Router, private _activRoute: ActivatedRoute) {
    }

    ngOnInit() {

        let array;

        this._activRoute.params.forEach(
            (arrayParams: Params) => {

                this.id_post = arrayParams["id_post"];
                this.postService.getPostById(this.id_post)
                    .subscribe(
                        (result) => {
                            console.log(result["data"])
                            this.id = result["data"]["id_post"];
                            this.titulo = result["data"]["titulo"];
                            this.cuerpo = result["data"]["cuerpo"];
                            this.fecha = result["data"]["fecha"];
                            this.cerrado = result["data"]["cerrado"];
                            this.id_alumno = result["data"]["id_alumno"];
                            this.id_asignatura = result["data"]["id_asignatura"];
                            let post: Post = new Post(this.id, this.titulo, this.cuerpo, this.fecha, this.cerrado, this.id_alumno, this.id_asignatura);

                        }, (error) => {

                        }
                    );



            });

        this.postService.getRespuestasById(this.id_post)
            .subscribe(
                (result) => {

                  this.respuestas=[];
                  for(let i in result["data"]){
                    let id_respuesta = result ["data"][i]["id_respuesta"];
                    let asunto = result ["data"][i]["asunto"];
                    let texto = result ["data"][i]["texto"];
                    let fecha = result ["data"][i]["fecha"];
                    let id_post = result ["data"][i]["id_post"];
                    let id_usuario = result["data"][i]["id_usuario"];
                    let id_respuesta_padre = result["data"][i]["id_respuesta_padre"];
                    let respuesta:Respuesta = new Respuesta(id_respuesta, asunto, texto, fecha, id_post, id_usuario, id_respuesta_padre);
                    this.respuestas.push(respuesta);
                  }
                }, (error) => {

                }
            );

    }

}
