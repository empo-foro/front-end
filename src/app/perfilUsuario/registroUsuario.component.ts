import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service";
import { User } from "../model/user.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'registrar-usuario',
    templateUrl: 'registroUsuario.component.html',
    styleUrls: ['registroUsuario.component.css'],
    providers: [UserService]
})
export class RegistroComponent implements OnInit{

    newUser:User = new User(null, null, null, null, null, null, null, null,null);
    user:User = new User(null, null, null, null, null, null, null, null,null);
    users = [this.user];
    constructor(private userService:UserService) {}
    ngOnInit(): void {

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
      /*  this.userService.addUser(this.newUser).subscribe(
            (result) => {
                console.log(result.message);
            },
            (error) => {
                console.log(error);
            }
        )*/
    }
}
