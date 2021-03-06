import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service";
import { User } from "../model/user.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {postsService} from "../services/posts.service";
import {Post} from "../model/post.model";
import {Respuesta} from "../model/respuesta.model";

@Component({
    selector: 'registrar-usuario',
    templateUrl: 'registroUsuario.component.html',
    styleUrls: ['registroUsuario.component.css'],
    providers: [UserService, postsService]
})
export class RegistroComponent implements OnInit{

    newUser:User = new User(null, null, null, null, null, null, null, null,null);
    user:User = new User(null, null, null, null, null, null, null, null,null);
    users = [this.user];
    constructor(private userService:UserService, private postService: postsService) {}
    nombre=" ";
    biografia = " ";
    posts = " ";
    respuestas = " ";
    listadoposts = [];
    listadorespuestas = [];
    ngOnInit(): void {
      let localStorageToken=localStorage.getItem("token");
      let localStorageTipo=localStorage.getItem("tipo");

      this.userService.getCountEstadisticas(localStorageToken)
          .subscribe(
              (result)=>{
                  this.posts = result["data"][0]["posts"];
                  this.respuestas = result["data"][1]["respuestas"];
                  console.log(this.posts);
                  console.log(result);
                  }, (error)=> {
                  console.log(error);
              }
          )

      this.userService.getUsuarioByToken(localStorageToken)
        .subscribe(
          (result)=>{
              this.nombre = result["data"][0]["nombre"];
              this.biografia = result["data"][0]["biografia"]
              console.log(this.nombre)
              console.log(result);
          },(error)=>{
              console.log(error);
          }
        )

        this.postService.getRespuestaByUserToken(localStorageToken)
            .subscribe(
                (result)=>{
                    this.listadorespuestas=[];
                    for(let i in result["data"]) {
                        let id_respuesta=result["data"] [i] ["id_respuesta"];
                        let asunto=result["data"] [i] ["asunto"];
                        let texto=result["data"] [i] ["texto"];
                        let fecha=result["data"] [i] ["fecha"];
                        let id_post=result["data"] [i] ["id_post"];
                        let id_usuario=result["data"] [i] ["id_usuario"];
                        let respuesta:Respuesta = new Respuesta(id_respuesta, asunto, texto, fecha, id_post, id_usuario);
                        this.listadorespuestas.push(respuesta)
                    }
                }, (error)=>{
                    console.log(error);
                }
            )

        this.postService.getPostByUserToken(localStorageToken)
            .subscribe(
                (result)=>{
                    this.listadoposts=[];
                    for(let i in result["data"]){
                        let id_post=result["data"][i]["id_post"]
                        let titulo = result["data"][i]["titulo"];
                        let cuerpo = result["data"][i]["cuerpo"];
                        let fecha = result["data"][i]["fecha"];
                        let cerrado = result["data"][i]["cerrado"];
                        let id_alumno = result["data"][i]["id_alumno"];
                        let id_asignatura = result["data"][i]["id_asignatura"];
                        let post:Post = new Post(id_post, titulo, cuerpo, fecha, cerrado, id_alumno,id_asignatura);
                        this.listadoposts.push(post)
                }
                    }, (error)=>{
                    console.log(error);
                }
            )
    }



    filesToUpload: FileList = null;

    handleFileInput(files: FileList) {
        this.filesToUpload = files;
    }


    addUser() {
        const formData: FormData = new FormData();

        for (let i = 0; i < this.filesToUpload.length; i++) {
            console.log(this.filesToUpload);
            formData.append(i.toString(),  this.filesToUpload[i],  this.filesToUpload[i].name);
        }
        formData.append("data", JSON.stringify(this.newUser));

        this.userService.addUser(formData).subscribe(
            (result) => {
                console.log(result.message);
            },
            (error) => {
                console.log(error);
            }
        );
    }



}
