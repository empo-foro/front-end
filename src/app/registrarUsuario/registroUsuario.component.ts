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

    addUser() {
        this.userService.addUser(this.newUser).subscribe(
            (result) => {
                console.log(this.newUser);
                console.log(result);
            },
            (error) => {
                console.log(error);
            }
        )
    }

}
