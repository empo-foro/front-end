import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";
import { User } from "../model/user.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'registrar-usuario',
    templateUrl: 'registroUsuario.component.html',
    styleUrls: ['registroUsuario.css'],
    providers: [UserService]
})
export class RegistroComponent implements OnInit{

    newUser:User = new User(null, null, null, null, null, null, null, null);
    user:User = new User(null, null, null, null, null, null, null, null);
    users = [this.user];
    constructor(private userService:UserService) {}
    ngOnInit(): void {

    }
    fileToUpload: File = null;

    /*handleFileInput(files: FileList) {
        this.fileToUpload = files.item(0);
    }

    uploadFileToActivity() {
        this.userService.postFile(this.fileToUpload).subscribe(data => {
            // do something, if upload success
        }, error => {
            console.log(error);
        });
    } */



    addUser() {
        this.userService.addUser(this.newUser).subscribe(
            (result) => {
                console.log(result.message);
            },
            (error) => {
                console.log(error);
            }
        )
    }
}
