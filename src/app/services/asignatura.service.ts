import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user.model';

@Injectable({
    providedIn: 'root'
})

export class AsignaturaService {
    constructor(private http: HttpClient) {
    }

    header = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    headerFiles = {headers: new HttpHeaders({'enctype': 'multipart/form-data'})};


    getAsignaturas() {
        let url = 'http://empo.alwaysdata.net/back-end/EstructuraPHP/index2.php?controller=asignatura';
        return this.http.get(url, this.header);
    }

    create(asignatura) {
        let url = 'http://empo.alwaysdata.net/back-end/EstructuraPHP/index2.php?controller=Asignatura';
        return this.http.post(url, asignatura, this.header);
    }

    getAsignaturasUsuario(token, tipo) {
        var data = {
            'id_token': token,
            'tipo': tipo
        };
        let url = 'http://empo.alwaysdata.net/back-end/EstructuraPHP/index2.php?controller=' + tipo + '&operacion=getAsignaturas';
        return this.http.post(url, data, this.header);
    }

}
