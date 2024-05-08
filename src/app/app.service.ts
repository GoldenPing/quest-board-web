import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chronos } from './chronos.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private apiUrlAuth = 'http://localhost:3000/auth'
  public user: any =""
  private username = localStorage.getItem('username')
  private mdp = localStorage.getItem('username')
  private idUser = localStorage.getItem('id_user')
  constructor( protected http : HttpClient, private chronos : Chronos) {}

  async InitService(){
    const bodyAuth = { "password": this.mdp, "username":this.username }
    this.user = await this.http.post<any>(this.apiUrlAuth, bodyAuth).toPromise();
    this.chronos.resetTimeout()
    return this.user
  }
}
