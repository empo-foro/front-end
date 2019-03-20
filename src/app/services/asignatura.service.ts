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
  url = '/DAW_EMPO/front-end/php/EstructuraPHP/index2.php';

  getAsignatura() {
    let url = this.url + '?controller=asignatura';
    return this.http.get(url, this.header );
  }
}
