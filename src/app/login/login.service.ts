import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../user.model";
import { Chronos } from "../chronos.service";

@Injectable(
    {
        providedIn:'root'
    }
)
export class LoginService {
    private apiUrlAuth = 'http://109.176.199.201:3000/auth'


    constructor (private http: HttpClient){

    }

   async auth(username: string, password : string){
        const bodyAuth = { "password":password, "username":username,"refresh" : false }
      const user = await this.http.post<User>(this.apiUrlAuth, bodyAuth).toPromise();
        if(user){
            if(user.role === 'admin'){
                localStorage.setItem('admin', '1');
            }else{
                localStorage.setItem('admin', '0');
            }
            localStorage.setItem('username',user.username);
            localStorage.setItem('password',user.password);
            localStorage.setItem('id_user', user.id_user.toString())

        }
        return user
    }
}
