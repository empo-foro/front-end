import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
@Component({
    selector:"menu-lateral",
    templateUrl:"./menuLateral.component.html",
    styleUrls:["./menuLateral.component.css"]
})
export class menuLateral implements OnInit{
    openHamburguer=false;
    constructor(private service: UserService , private router: Router) { }

  ngOnInit():void{
    let localStorageToken=localStorage.getItem("token");
    let localStorageTipo=localStorage.getItem("tipo");



    this.service.getAsignaturasUsuario(localStorageToken, localStorageTipo)
      .subscribe(
        (result)=>{

        },(error) => {

        });
  }

clickOpenHamburguer(){
  this.openHamburguer=!this.openHamburguer;
}

  logOut(){
    let localStorageToken = localStorage.getItem("token");
    let localStorageTipo = localStorage.getItem("tipo");
    this.service.logOut(localStorageToken, localStorageTipo)
      .subscribe(
        (result)=>{
          localStorage.removeItem("token");
          localStorage.removeItem("tipo");
          this.router.navigate(['']);
        },(error) => {

        });

  }


}
