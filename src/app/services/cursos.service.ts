import {Injectable, OnInit} from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from "../model/curso.model";

@Injectable({
    providedIn: 'root'
})

export class CursosService {
    constructor(private http: HttpClient) { }
    header= {headers: new HttpHeaders({'Content-Type': 'application/json'})};


    getCurso() {
        let url = 'http://empo.alwaysdata.net/back-end/EstructuraPHP/index2.php?controller=Curso';
        return this.http.get(url, this.header );
    }

    getUsuariosTipoAlumno() {
        let url = 'http://empo.alwaysdata.net/back-end/EstructuraPHP/index2.php?controller=Usuario&operacion=listarUsuarios&tipo=alumno';
        return this.http.get(url, this.header);
    }



    getUsuariosTipoProfesores() {
        let url = 'http://empo.alwaysdata.net/back-end/EstructuraPHP/index2.phpcontroller=Usuario&tipo=profesor';
        return this.http.get(url, this.header);
    }
}
