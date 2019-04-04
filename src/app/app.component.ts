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
   logged=false;
  ngOnInit():void{

    let localStorageToken=localStorage.getItem("token");
    let localStorageTipo=localStorage.getItem("tipo");

    if( localStorage != null){
      this.service.checkToken(localStorageToken, localStorageTipo)
        .subscribe(
          (result)=>{
            console.log("logedd")
            this.logged=true;
          },(error) => {
            console.log("no logedd")
            this.logged=false;
            console.log("no logedd 2")
            this.router.navigate(['']);
            localStorage.removeItem("token");
            localStorage.removeItem("tipo");
          });
    }else{
      this.router.navigate(['']);
      localStorage.removeItem("token");
      localStorage.removeItem("tipo");
      console.log("nanai");
    }
  }
}
