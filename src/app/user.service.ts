import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './model/user.model';

@Injectable({
    providedIn: 'root'
})

export class userService {
    constructor(private http: HttpClient ) { }

    getUsers() {
        let url = '/EMPO/?controller=userclass';
        return this.http.get(url,{headers: new HttpHeaders({'Content-Type': 'application/json'})});
    }

    getUser(numUser: number) {
        let url = '/EMPO/?controller=userclass&id='+ numUser;
        return this.http.get(url,{headers: new HttpHeaders({'Content-Type': 'application/json'})});
    }

    addUser(user: User) {
        let url = '/EMPO/?controller=userclass';
        return this.http.post(url, user ,{headers:new HttpHeaders({'Content-Type': 'application/json'})});
    }

    updateUser(numUser: number , user: User ) {
        let url = '/EMPO/?controller=userclass&id='+ numUser;
        return this.http.put(url, user ,{headers: new HttpHeaders({'Content-Type': 'application/json'})});
    }

    deleteUser(numUser: number ) {
        let url = '/EMPO/?controller=userclass&id='+ numUser;
        return this.http.delete(url,{headers: new HttpHeaders({'Content-Type': 'application/json'})});
    }
}
