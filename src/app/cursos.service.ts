import {Injectable, OnInit} from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from "./model/curso.model";

@Injectable({
    providedIn: 'root'
})

export class CursosService {
    constructor(private http: HttpClient) { }
    header= {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    url = '/DAW_EMPO/front-end/php/EstructuraPHP/index2.php';

    getCurso() {
        let url = this.url + '?controller=curso';
        return this.http.get(url, this.header );
    }
}
