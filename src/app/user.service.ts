import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './model/user.model';

@Injectable({
    providedIn: 'root'
})

export class userService {
    constructor(private http: HttpClient ) { }
    header= {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    url = '/DAW_EMPO/front-end/php/EstructuraPHP/index.php';

    getUsers() {
        let url = '/EMPO/?controller=userclass';
        return this.http.get(url, this.header );
    }

    getUser(numUser: number) {
        let url = '/EMPO/?controller=userclass&id=' + numUser;
        return this.http.get(url, this.header );
    }

    addUser(user: User):Observable<any> {
        return this.http.post(this.url + "?controller=usuario", user , this.header );
    }

    updateUser( numUser: number , user: User ) {
        let url = '/EMPO/?controller=userclass&id='+ numUser;
        return this.http.put(url, user , this.header );
    }

    deleteUser( numUser: number ) {
        let url = '/EMPO/?controller=userclass&id='+ numUser;
        return this.http.delete(url, this.header );
    }
    login(email, tipo, password) {

        let url = "/EMPO/?controller='"+tipo+"'&operacion='login'";
        return this.http.get(url, this.header);
    }
}
