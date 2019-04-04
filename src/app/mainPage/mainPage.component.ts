import {Component} from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../model/user.model';
import { UserService } from "../services/user.service";
import { Router } from '@angular/router';
import {Session} from '../model/session.model';
import {OnInit} from "@angular/core";
@Component({
    selector:"main-page",
    templateUrl:"./mainPage.component.html",
    styleUrls:["./mainPage.component.css"],
    providers: [ UserService ]

})

export class mainPage implements OnInit {

  nuevoUsuario : User = new User(null, null, null, null, null, null, null, null, null);
  constructor(private service: UserService , private router: Router) { }

  ngOnInit():void{
    let localStorageToken=localStorage.getItem("token");
    let localStorageTipo=localStorage.getItem("tipo");

    if( localStorage != null){
      this.service.checkToken(localStorageToken, localStorageTipo)
        .subscribe(
          (result)=>{
            this.router.navigate(['menuLateral']);
          },(error) => {
            console.log("Error al iniciar sesión");
      });

    }else{
      console.log("Error al iniciar sesión");
    }
  }

  login(){

    this.service.login(this.nuevoUsuario.email,  this.nuevoUsuario.tipo, this.nuevoUsuario.password)
      .subscribe(
        (result)=> {

              let id_token=result.data['id_token'];
              let id_usuario=result.data['id_usuario'];
              let biografia=result.data['biografia'];
              let email=result.data['biografia'];
              let imagen_personal=result.data['imagen_personanl'];
              let nif = result.data['nif'];
              let nombre=result.data['nombre'];
              let password = result.data['password'];
              let tipo = result.data['tipo'];

              let user:User = new User(id_usuario, nif, nombre, password, imagen_personal, tipo, email, biografia, id_token);
              let sesion:Session = new Session(id_token, user);
              localStorage.setItem("token", id_token);
              localStorage.setItem("tipo", this.nuevoUsuario.tipo);

              this.router.navigate(['']);

        },
        (error) => {

          }
      )
  }
}
