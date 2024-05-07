import { Injectable } from "@angular/core";
import { AppService } from "../app.service";
import { HttpClient } from "@angular/common/http";
import { UpdateDtoParticipe } from "./participe.update.model.dto";
import { Participe } from "./participe.model";

@Injectable({
    providedIn : "root"
})
export class ParticipeService extends AppService{
    private apiUrlParticpe = "http://localhost:3000/participe"
    override user:any

    constructor(http: HttpClient){
        super(http)
    }


    async update(id : number, updateDtoParticipe : UpdateDtoParticipe){
        await this.InitService();
        const httpBody = {
            user : this.user, ... updateDtoParticipe
        }
       const retour = await this.http.patch<Participe>(this.apiUrlParticpe +'/'+ id, httpBody).toPromise()
     
    }
}