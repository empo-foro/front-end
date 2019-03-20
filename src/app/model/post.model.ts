export class Post {
  id_post:number = null;
  titulo:string = "";
  cuerpo:string = "";
  fecha:string="";
  cerrado:boolean=null;
  id_alumno:number=null;

  constructor (id_post:number, titulo:string, cuerpo:string, fecha:string, cerrado:boolean, id_alumno:number) {
    this.id_post=id_post;
    this.titulo = titulo;
    this.cuerpo=cuerpo;
    this.fecha=fecha;
    this.cerrado=cerrado;
    this.id_alumno=id_alumno;
  }
}
