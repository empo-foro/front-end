export class respuestaReportada {
  id_reporte:number = null;
  id_respuesta:number = null;
  tipo_reporte:string = "";
  descripcion:string="";
  id_usuario:number=null;

  constructor (id_reporte:number, id_respuesta:number, tipo_reporte:string, descripcion:string, id_usuario:number) {
    this.id_reporte=id_reporte;
    this.id_respuesta = id_respuesta;
    this.tipo_reporte=tipo_reporte;
    this.descripcion=descripcion;
    this.id_usuario=id_usuario;
  }
}
