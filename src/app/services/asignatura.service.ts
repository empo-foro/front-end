import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})

export class asignaturaService {
  constructor(private http: HttpClient) {
  }

  header = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
  headerFiles = {headers: new HttpHeaders({'enctype': 'multipart/form-data'})};

  url = '/front-end/src/php/back-end/EstructuraPHP/index2.php';


getAsignaturas() {
    let url = this.url + '?controller=asignatura';
    return this.http.get(url, this.header );
  }

  getAsignaturasUsuario(token,tipo){
    var data = {
      "id_token":token,
      "tipo": tipo
    }
    let url = this.url + "?controller="+tipo+"&operacion=getAsignaturas";
    return this.http.post(url, data, this.header);
  }

}