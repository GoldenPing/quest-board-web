import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../user.model";

@Injectable(
    {
        providedIn:'root'
    }
)
export class LoginService {
    private apiUrlAuth = 'http://localhost:3000/auth'


    constructor (private http: HttpClient){

    }

   async auth(username: string, password : string){
        const bodyAuth = { "password":password, "username":username }
      const user = await this.http.post<User>(this.apiUrlAuth, bodyAuth).toPromise();
        if(user){
            if(user.role === 'admin'){
                localStorage.setItem('admin', '1');
            }
        }
        return user
    }
}