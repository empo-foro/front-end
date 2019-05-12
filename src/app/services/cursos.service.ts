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
        let url = 'index2.php?controller=Curso';
        return this.http.get(url, this.header );
    }

    getUsuariosTipoAlumno() {
        let url = 'index2.php?controller=Usuario&operacion=listarUsuarios&tipo=alumno';
        return this.http.get(url, this.header);
    }

    getAsignaturasUserByToken(id_token) {
        let url = 'index2.php?controller=Asignatura&operacion=getUserAsignaturaByToken&id_token='+id_token;
        return this.http.get(url, this.header);
    }


    getUsuariosTipoProfesores() {
        let url = 'index2.php?controller=Usuario&tipo=profesor';
        return this.http.get(url, this.header);
    }
}
