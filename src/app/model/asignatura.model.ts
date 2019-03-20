export class Asignatura {
  id_asignatura:number = null;
  nombre:string = "";
  id_curso:number = null;

  constructor (id_asignatura:number, nombre:string, id_curso:number) {
    this.id_asignatura=id_asignatura;
    this.nombre = nombre;
    this.id_curso=id_curso;
  }
}
