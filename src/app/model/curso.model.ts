export class Curso {
    id_curso:number = null;
    nombre:string = "";
    id_centro:number = null;

    constructor (id_curso:number, nombre:string, id_centro:number) {
        this.id_curso=id_curso;
        this.nombre = nombre;
        this.id_centro=id_centro;
    }
}
