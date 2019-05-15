import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})

export class postsService {
  constructor(private http: HttpClient) {  }

  header = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
  headerFiles = {headers: new HttpHeaders({'enctype': 'multipart/form-data'})};

  getListadoPosts(id_asignatura){
    let url = "http://empo.alwaysdata.net/back-end/EstructuraPHP/index2.php?controller=Post&operacion=asignaturaPost&id="+id_asignatura;
    return this.http.get(url, this.header);
  }

  getPostById(id_post){
    let url = "http://empo.alwaysdata.net/back-end/EstructuraPHP/index2.php?controller=Post&id="+id_post;
    return this.http.get(url, this.header);
  }

  getRespuestasById(id_post) {
    let url = 'http://empo.alwaysdata.net/back-end/EstructuraPHP/index2.php?controller=Respuesta&operacion=comentariosPost&id_post='+id_post;
    return this.http.get(url, this.header);
  }

  getPostByUserToken(id_token){
    let url = 'http://empo.alwaysdata.net/back-end/EstructuraPHP/index2.php?controller=Post&operacion=getPostByUserToken&id_token='+id_token;
    return this.http.get(url, this.header);
  }

  crearPost(post){

    console.log(post);
    var data = {
      "titulo":post.titulo,
      "cuerpo":post.cuerpo,
      "fecha" : post.fecha,
      "cerrado" : post.cerrado,
      "id_alumno":post.id_alumno,
      "id_asignatura":post.id_asignatura
    };

    let url = "http://empo.alwaysdata.net/back-end/EstructuraPHP/index2.php?controller=Post";
    return this.http.post( url, post, this.header );
  }


  getRespuestaByUserToken(id_token) {
    let url = 'http://empo.alwaysdata.net/back-end/EstructuraPHP/index2.php?controller=Respuesta&operacion=getUserRespuestasByToken&id_token='+id_token;
    return this.http.get(url, this.header);
  }
  crearRespuesta(respuesta) {



    let url = 'http://empo.alwaysdata.net/back-end/EstructuraPHP/index2.php?controller=Respuesta';
    return this.http.post( url, respuesta, this.header );
  }
}
