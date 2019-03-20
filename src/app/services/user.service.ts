import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
    providedIn: 'root'
})

export class UserService {
    constructor(private http: HttpClient ) { }
    header= {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    url = 'DAW_EMPO/front-end/php/EstructuraPHP/index2.php';

    getUsers() {
        let url = '/EMPO/?controller=userclass';
        return this.http.get(url, this.header );
    }

    getUser(numUser: number) {
        let url = '/EMPO/?controller=userclass&id=' + numUser;
        return this.http.get(url, this.header );
    }

    /*addUser(user: User):Observable<any> {
        return this.http.post(this.url + "?controller=usuario", user , this.header );
    }*/
    addUser(user: FormData):Observable<any> {
        return this.http.post(this.url + "?controller=usuario", user , this.header );
    }

    updateUser( numUser: number , user: User ) {
        let url = '/EMPO/?controller=userclass&id='+ numUser;
        return this.http.put(url, user , this.header );
    }

    deleteUser( numUser: number ) {
        let url = '/EMPO/?controller=userclass&id='+ numUser;
        return this.http.delete(url, this.header );
    }

    login(email, tipo, password):Observable<any> {

      var data = {
        "email":email,
        "password":password
      };

      let url = this.url + "?controller="+tipo+"&operacion=logIn";
      return this.http.post( url, data, this.header );
    }

    checkToken(token, tipo){
      var data ={
        "id_token" : token
      };
      let url = this.url + "?controller="+tipo+"&operacion=checkToken";
      return this.http.post( url, data, this.header);
    }

  logOut(id_token, tipo){
    let url = this.url + "?controller="+tipo+"&operacion=logOut&id_token="+id_token;
    return this.http.get(url, this.header);
  }

}
