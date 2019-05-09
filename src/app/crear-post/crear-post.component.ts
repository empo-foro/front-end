import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {asignaturaService} from '../services/asignatura.service';
import {postsService} from '../services/posts.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Post} from '../model/post.model';
import {NotifierService} from 'angular-notifier';

@Component({
  selector: 'app-crear-post',
  templateUrl: './crear-post.component.html',
  styleUrls: ['./crear-post.component.css']
})
export class CrearPostComponent implements OnInit {
  private readonly notifier: NotifierService;
  constructor(notifierService: NotifierService ,private service: UserService ,private asignaturaService: asignaturaService,private postService: postsService ,private router: Router, private _activRoute:ActivatedRoute) {
    this.notifier = notifierService;;
  }
  titulo;
  cuerpo;
  id_asignatura="";
  id_alumno="";
  localStorageToken = localStorage.getItem( "token" );
  ngOnInit() {

    this.service.getIdAlumnoByToken(this.localStorageToken)
      .subscribe(
        (result)=>{
          console.log(result);
          this.id_alumno = result["data"][0]["id_alumno"];

        },(error)=>{

        }
        );
    this._activRoute.params.forEach(
      (arrayParams: Params) => {
        console.dir(arrayParams);

        this.id_asignatura = arrayParams["id_asignatura"];

      });
  }

    addPost(){

    let fecha = new Date();
    let data = new Post(null, this.titulo, this.cuerpo, fecha ,"0",this.id_alumno,this.id_asignatura );

    this.postService.crearPost(data)
      .subscribe(
        (result)=>{
          this.router.navigate(['postsListado/', this.id_asignatura])
        },(error)=>{
          this.notifier.notify( 'error', 'Error al crear el post' );
        }
      )
  }

}
