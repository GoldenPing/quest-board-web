import { Injectable } from "@angular/core";
import { AppService } from "../app.service";
import { HttpClient } from "@angular/common/http";
import { Chronos } from "../chronos.service";
import { User } from "../user.model";

@Injectable({
  providedIn:"root"
})
export class ChangePasswordService extends AppService {

  apiUrlUser = 'http://localhost:3000/user'

  constructor(http : HttpClient, chronos: Chronos){
    super(http, chronos)
  }

  async post(confirm : string){
    this.InitService()
    const id = localStorage.getItem('id_user')
    const retour = await this.http.patch<User>(this.apiUrlUser +'/'+id,{mdp_user : confirm}).toPromise()
    if(retour){
      localStorage.setItem('password',retour.mdp_user);
    }
  }
}
