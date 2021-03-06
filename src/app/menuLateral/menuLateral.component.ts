import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

/* Modelos */
import {User} from '../model/user.model';
import {Asignatura} from '../model/asignatura.model';
import {AsignaturaService} from '../services/asignatura.service';
import {postsService} from '../services/posts.service';

import * as $ from 'jquery';

@Component({
    selector:"menu-lateral",
    templateUrl:"./menuLateral.component.html",
    styleUrls:["./menuLateral.component.css"]
})
export class menuLateral implements OnInit {

  openHamburguer=false;
  logged;
  asignaturas = [];
  botones = true;
  constructor(private service: UserService , private asignaturaService: AsignaturaService, private postService: postsService , private router: Router) { }

    ngOnInit():void{

    let localStorageToken = localStorage.getItem( "token" );
    let localStorageTipo = localStorage.getItem( "tipo" );

    this.mostrarAsignaturas();
    this.ocultarBotones()
  }

ocultarBotones(){
  let localStorageTipo = localStorage.getItem( "tipo" );
  if(localStorageTipo=="Centro"){
  this.botones=false;
  }
}
  /*CLICK PARA ABRIR MENU LATERAL*/
    clickOpenHamburguer(){
        this.openHamburguer=!this.openHamburguer;
    }


    /*SACAR ASIGNATURAS DE LA BBDD*/
    mostrarAsignaturas(){
      let localStorageToken=localStorage.getItem("token");
      let localStorageTipo=localStorage.getItem("tipo");

  this.asignaturaService.getAsignaturasUsuario(localStorageToken, localStorageTipo)
    .subscribe(
      (result)=>{

        for(let i in result["data"]) {

          let id = result["data"][i]["id_asignatura"];
          let nombre = result["data"][i]["nombre"];
          let id_curso = result["data"][i]["id_curso"];
          let asignatura:Asignatura = new Asignatura(id, nombre, id_curso);
          this.asignaturas.push(asignatura);

        }

        console.log(this.asignaturas)

      },(error) => {

        });

    }


    /* Método con el que cerramos sesión*/
    logOut(){

    let localStorageToken = localStorage.getItem( "token" );
    let localStorageTipo = localStorage.getItem( "tipo" );

    this.service.logOut(localStorageToken, localStorageTipo)
      .subscribe(
        (result)=>{
          this.logged=false;
          localStorage.removeItem("token");
          localStorage.removeItem("tipo");
          this.router.navigate(['']);
        },(error) => {

        });

  }

}
