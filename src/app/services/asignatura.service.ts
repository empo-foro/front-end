import {Injectable, OnInit} from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Asignatura} from '../model/asignatura.model';

@Injectable({
  providedIn: 'root'
})

export class asignaturaService {
  constructor(private http: HttpClient) { }
  header= {headers: new HttpHeaders({'Content-Type': 'application/json'})};
  url = '/EMPO/front-end/php/back-end/EstructuraPHP/index2.php';

  getAsignaturas() {
    let url = this.url + '?controller=asignatura';
    return this.http.get(url, this.header );
  }

}
