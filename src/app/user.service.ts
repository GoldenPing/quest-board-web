import { Injectable } from "@angular/core";
import { AppService } from "./app.service";
import { HttpClient } from "@angular/common/http";
import { User } from "./user.model";
import { Chronos } from "./chronos.service";

@Injectable({
    providedIn : "root"
})
export class UserService extends AppService{
    userApiUrl : string = 'http://109.176.199.201:3000/user'

    constructor(http: HttpClient,chronos : Chronos){
        super(http,chronos)
    }

    async all(){
        const retour = this.http.get<User[]>(this.userApiUrl).toPromise()
        return retour
    }
}
