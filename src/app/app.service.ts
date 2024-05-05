import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private apiUrlAuth = 'http://localhost:3000/auth'
  public user: any =""
  private username = 'admin'
  private mdp ='hop'
  private idUser = 2 
  constructor( protected http : HttpClient) {}

  async InitService(){
    const bodyAuth = { "password": this.mdp, "username":this.username }
    this.user = await this.http.post<any>(this.apiUrlAuth, bodyAuth).toPromise();
    return this.user
  }
}
