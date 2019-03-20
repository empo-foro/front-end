import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
@Component({
    selector:"menu-lateral",
    templateUrl:"./menuLateral.component.html",
    styleUrls:["./menuLateral.component.css"]
})
export class menuLateral implements OnInit{
    constructor(private service: UserService , private router: Router) { }

  ngOnInit():void{
    console.log(localStorage.getItem("token"));
    console.log(localStorage.getItem("tipo"));
    let localStorageToken=localStorage.getItem("token");
    let localStorageTipo=localStorage.getItem("tipo");

    if( localStorage != null){
      this.service.checkToken(localStorageToken, localStorageTipo)
        .subscribe(
          (result)=>{
            this.router.navigate(['menuLateral']);
          },(error) => {
            this.router.navigate(['']);
            localStorage.removeItem("token");
            localStorage.removeItem("tipo");
            console.log("nanai");
          });

    }else{
      this.router.navigate(['']);
      localStorage.removeItem("token");
      localStorage.removeItem("tipo");
      console.log("nanai");
    }
  }

    asignaturas=[{
        nombre:"GENERAL"
    },{
        nombre:"M02"
    },{
        nombre:"M04"
    },{
        nombre:"M05"
    },{
        nombre:"M06"
    },{
        nombre:"M07"
    },{
        nombre:"M08"
    }]

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
