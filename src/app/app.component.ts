import {Component, OnInit} from '@angular/core';
import {UserService} from './services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private service: UserService , private router: Router) { }
/*
  checkTokenServer(){
    this.service.checkToken(localStorageToken, localStorageTipo)
      .subscribe(
        (result)=>{
          console.log("logedd")
          this.logged=true;
          this.router.navigate(['registrarCurso']);
        },(error) => {
          console.log("no logedd")
          this.logged=false;
          console.log("no logedd 2")
          this.router.navigate(['']);

        }); localStorage.removeItem("token");
          localStorage.removeItem("tipo");
  }
*/
  checkTokenLocalStorage(){
    let localStorageToken=localStorage.getItem("token");
    let localStorageTipo=localStorage.getItem("tipo");
    if( localStorage.getItem("token") != null){
      return true;
    }else{

    /*  this.router.navigate(['']);
      localStorage.removeItem("token");
      localStorage.removeItem("tipo");
      console.log("nanai");
*/

      return false;
    }
  }
  ngOnInit():void{
    this.checkTokenLocalStorage();

  }
}
