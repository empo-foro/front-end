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
    headerFiles = {headers: new HttpHeaders({'enctype': 'multipart/form-data'})};

    url = '/front-end/src/php/back-end/EstructuraPHP/index2.php';

    getUsers() {
        let url = '/EMPO/?controller=userclass';
        return this.http.get(url, this.header );
    }

    getUser(numUser: number) {
        let url = '/EMPO/?controller=userclass&id=' + numUser;
        return this.http.get(url, this.header );
    }

    addUsers(data):Observable<any> {
        let url = "?controller=usuario&operacion=registro-usuarios";
        return this.http.post(this.url + url, data, this.headerFiles);
    }

    addUser(data):Observable<any> {
        let url = "?controller=Usuario&operacion=registroUsuario";
        return this.http.post(this.url + url, data , this.header );
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
  userData(id_token){
      let url = this.url+ "?controller=Usuario&operacion=getUserData&id_token='"+id_token+"'";
    return this.http.get( url, this.header);
  }
  logOut(id_token, tipo){
    let url = this.url + "?controller="+tipo+"&operacion=logOut&id_token="+id_token;
    return this.http.get(url, this.header);
  }

  getAsignaturasUsuario(token,tipo){
      var data = {
        "token":token,
        "tipo": tipo
      }
      let url = this.url + "?controller=";
      return this.http.post(url, data, this.header);
  }

    eliminarUsuario(id) {
        let url = this.url + '?controller=Usuario&id='+id;
        console.log(url);
        return this.http.delete(url, this.header);
    }

}
