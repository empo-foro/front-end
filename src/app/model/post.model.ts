export class Post {
  id_post:string = "";
  titulo:string = "";
  cuerpo:string = "";
  fecha:Date;
  cerrado:string="";
  id_alumno:string="";
  id_asignatura:string="";
  constructor (id_post:string, titulo:string, cuerpo:string, fecha:Date, cerrado:string, id_alumno:string, id_asignatura:string) {
    this.id_post=id_post;
    this.titulo = titulo;
    this.cuerpo=cuerpo;
    this.fecha=fecha;
    this.cerrado=cerrado;
    this.id_alumno=id_alumno;
    this.id_asignatura=id_asignatura;
  }
}
