export class respuestaGuardada {
  id_guardado:number = null;
  id_respuesta:number = null;
  id_usuario:number=null;

  constructor (id_guardado:number, id_respuesta:number, id_usuario:number) {
    this.id_guardado=id_guardado;
    this.id_respuesta = id_respuesta;
    this.id_usuario=id_usuario;
  }
}
