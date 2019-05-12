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

    addUsers(data): Observable<any> {

        let url = 'index2.php?controller=usuario&operacion=registro-usuarios';

        return this.http.post(url, data, this.headerFiles);
    }

    addUser(data): Observable<any> {

        let url = 'index2.php?controller=Usuario&operacion=registroUsuario';

        return this.http.post(url, data, this.header);
    }

    login(email, tipo, password): Observable<any> {

        var data = {
            'email': email,
            'password': password
        };

        let url = '/front-end/src/php/back-end/EstructuraPHP/index2.php?controller=' + tipo + '&operacion=logIn';

        return this.http.post(url, data, this.header);
    }

    checkToken(token, tipo) {

        var data = {
            'id_token': token
        };

        let url = 'index2.php?controller=' + tipo + '&operacion=checkToken';

        return this.http.post(url, data, this.header);
    }

    getUsuarioByToken(id_token) {

        let url = 'index2.php?controller=Usuario&operacion=getUsuarioByToken&id_token=' + id_token + '';

        return this.http.get(url, this.header);
    }

    logOut(id_token, tipo) {

        let url = 'index2.php?controller=' + tipo + '&operacion=logOut&id_token=' + id_token;

        return this.http.get(url, this.header);
    }

    getAsignaturasUsuario(token, tipo) {

        var data = {
            'token': token,
            'tipo': tipo
        };

        let url = 'index2.php?controller=';

        return this.http.post(url, data, this.header);

    }

    eliminarUsuario(id) {

        let url = 'index2.php?controller=Usuario&id=' + id;

        return this.http.delete(url, this.header);
    }

    getInfoUsuario(id) {

        let url = 'index2.php?controller=Usuario&id=' + id;

        return this.http.get(url, this.header);
    }

    getCountEstadisticas(id_token) {
        let url = 'index2.php?controller=Usuario&operacion=getCountByToken&id_token='+id_token;
        return this.http.get(url, this.header);
    }


  getIdAlumnoByToken(id_token){
    let url = 'index2.php?controller=Usuario&operacion=getAlumnoByToken&id_token='+id_token;
    console.log(url);
    return this.http.get(url, this.header);

  }
}
