import { Injectable } from "@angular/core";
import { AppService } from "./app.service";
import { HttpClient } from "@angular/common/http";
import { User } from "./user.model";

@Injectable({
    providedIn : "root"
})
export class UserService extends AppService{
    userApiUrl : string = 'http://localhost:3000/user'

    constructor(http: HttpClient){
        super(http)
    }

    async all(){
        const retour = this.http.get<User[]>(this.userApiUrl).toPromise()
        return retour
    }
}