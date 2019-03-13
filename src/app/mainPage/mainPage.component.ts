import {Component} from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../model/user.model';
import { UserService } from "../user.service";
import { Router } from '@angular/router';

@Component({
    selector:"main-page",
    templateUrl:"./mainPage.component.html",
    styleUrls:["./mainPage.component.css"],
    providers: [ UserService ]

})

export class mainPage {

  nuevoUsuario : User = new User(null, null, null, null, null, null, null, null, null);
  constructor(private service: UserService , private router: Router) { }



  login(){

    this.service.login(this.nuevoUsuario.email,  this.nuevoUsuario.tipo, this.nuevoUsuario.password)
      .subscribe(
        (result)=> {
              //result.message.data['id_token'];
              console.log(result.message)
              this.router.navigate(['menuLateral']);

          console.log(result)
          if (result["message"] == 'Success') {

        },
        (error) => {

          }
        }
      )
  }

}
