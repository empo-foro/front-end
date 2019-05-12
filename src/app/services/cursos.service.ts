import {Injectable} from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class CursosService {
    constructor(private http: HttpClient) { }
    header= {headers: new HttpHeaders({'Content-Type': 'application/json'})};

    crearCurso(curso) {
        let url = 'http://empo.alwaysdata.net/back-end/EstructuraPHP/index2.php?controller=Curso';
        return this.http.post(url, curso, this.header);
    }

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
