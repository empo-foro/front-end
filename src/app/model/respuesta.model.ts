export class Respuesta {
  id_respuesta:number = null;
  asunto:string = "";
  texto:string = "";
  fecha:string="";
  id_post:number=null;
  id_usuario:number=null;
  id_respuesta_padre:number=null;

  constructor (id_respuesta:number, asunto:string, texto:string, fecha:string, id_post:number, id_usuario:number, id_respuesta_padre:number) {
    this.id_respuesta=id_respuesta;
    this.asunto = asunto;
    this.texto=texto;
    this.fecha=fecha;
    this.id_post=id_post;
    this.id_usuario=id_usuario;
    this.id_respuesta_padre=id_respuesta_padre;
  }
}
