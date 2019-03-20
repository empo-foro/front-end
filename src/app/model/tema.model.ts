export class Tema {
  id_tema:number = null;
  nombre:string = "";

  constructor (id_tema:number, nombre:string) {
    this.id_tema=id_tema;
    this.nombre = nombre;
  }
}
