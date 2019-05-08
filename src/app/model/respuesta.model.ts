export class Respuesta {
  id_respuesta:string = "";
  asunto:string = "";
  texto:string = "";
  fecha:string="";
  id_post:string="";
  id_usuario:string="";
  id_respuesta_padre:string="";

  constructor (id_respuesta:string, asunto:string, texto:string, fecha:string, id_post:string, id_usuario:string, id_respuesta_padre:string) {
    this.id_respuesta=id_respuesta;
    this.asunto = asunto;
    this.texto=texto;
    this.fecha=fecha;
    this.id_post=id_post;
    this.id_usuario=id_usuario;
    this.id_respuesta_padre=id_respuesta_padre;
  }
}
