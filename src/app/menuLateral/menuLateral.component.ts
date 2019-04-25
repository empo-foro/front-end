import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {User} from '../model/user.model';
import {Asignatura} from '../model/asignatura.model';
import {asignaturaService} from '../services/asignatura.service';
import {postsService} from '../services/posts.service';

@Component({
    selector:"menu-lateral",
    templateUrl:"./menuLateral.component.html",
    styleUrls:["./menuLateral.component.css"]
})
export class menuLateral implements OnInit{
  openHamburguer=false;
  constructor(private service: UserService ,private asignaturaService: asignaturaService,private postService: postsService ,private router: Router) { }
  logged;
  asignaturas = [];
  ngOnInit():void{

    this.mostrarAsignaturas();

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

        for(var i in result.data){
          let id=result.data[i].id_asignatura
          let nombre = result.data[i].nombre;
          let id_curso = result.data[i].id_curso;
          let asignatura:Asignatura = new Asignatura(id, nombre, id_curso);
          this.asignaturas.push(asignatura)
        }
        console.log(this.asignaturas)
      },(error) => {

      });
}

/*CERRAR SESIÓN*/
  logOut(){
    let localStorageToken = localStorage.getItem("token");
    let localStorageTipo = localStorage.getItem("tipo");
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
