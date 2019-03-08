export class User {
  id_usuario: number = 0;
  nif: string ="";
  nombre: string = "";
  password: string =  "";
  imagen_personal: string;
  tipo: string = "";
  email: string = "";
  biografia: string = "";
  id_centro: number = 1;

  constructor(id_usuario:number, nif:string, nombre:string, password:string, imagen_personal:string, tipo:string, email:string, biografia:string) {
    this.id_usuario = id_usuario ;
    this.nif = nif ;
    this.nombre = nombre ;
    this.password = password ;
    this.imagen_personal = imagen_personal ;
    this.tipo = tipo ;
    this.email = email;
    this.biografia = biografia;
  }
}
