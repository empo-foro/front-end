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
    let url = "index2.php?controller=post&operacion=asignaturaPost&id="+id_asignatura;
    return this.http.get(url, this.header);
  }

  getPostById(id_post){
    let url = "index2.php?controller=Post&id="+id_post;
    return this.http.get(url, this.header);
  }

  getRespuestasById(id_post) {
    let url = this.url + '?controller=Respuesta&operacion=comentariosPost&id_post='+id_post;
    return this.http.get(url, this.header);
  }

  getPostByUserToken(id_token){
    let url = 'index2.php?controller=Post&operacion=getPostByUserToken&id_token='+id_token;
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

    let url = this.url + "?controller=Post";
    return this.http.post( url, post, this.header );
  }


  getRespuestaByUserToken(id_token) {
    let url = this.url + '?controller=Respuesta&operacion=getUserRespuestasByToken&id_token='+id_token;
    return this.http.get(url, this.header);
  }
}
