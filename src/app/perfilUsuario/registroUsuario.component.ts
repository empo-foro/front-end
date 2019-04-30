import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service";
import { User } from "../model/user.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {postsService} from '../services/posts.service';

@Component({
    selector: 'registrar-usuario',
    templateUrl: 'registroUsuario.component.html',
    styleUrls: ['registroUsuario.component.css'],
    providers: [UserService,postsService]
})
export class RegistroComponent implements OnInit{

    newUser:User = new User(null, null, null, null, null, null, null, null,null);
    user:User = new User(null, null, null, null, null, null, null, null,null);
    users = [this.user];
    constructor(private userService:UserService, private postService:postsService) {}
    nombre=" ";
    biografia = " ";
    ngOnInit(): void {
      let localStorageToken=localStorage.getItem("token");
      let localStorageTipo=localStorage.getItem("tipo");

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

        this.postService.getPostByUserToken(localStorageToken)
            .subscribe(
                (result)=>{
                    console.log("posts");
                    console.log(result);
                },(error)=>{
                    console.log(error);
                }
            );
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
