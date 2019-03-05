export class User {
  id: number = 0;
  nif: string ="";
  nombre: string = "";
  password: string =  "";
  img: string;
  tipo: string = "";
  email: string = "";
  biografia: string = "";

  constructor(id:number, nif:string, nombre:string, password:string, img:string, tipo:string, email:string,biografia:string) {
    this.id=id;
    this.nif=nif;
    this.nombre=nombre;
    this.password=password;
    this.img=img;
    this.tipo=tipo;
    this.email=email;
    this.biografia=biografia;
  }
}
