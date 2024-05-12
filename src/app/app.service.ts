import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chronos } from './chronos.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private apiUrlAuth = 'http://109.176.199.201:3000/auth'
  public user: any =""
  private username = localStorage.getItem('username')
  private mdp = localStorage.getItem('password')
  private idUser = localStorage.getItem('id_user')
  constructor( protected http : HttpClient, private chronos : Chronos) {}

  async InitService(){
    const bodyAuth = { "password": this.mdp, "username":this.username, "refresh" : true }
    this.user = await this.http.post<any>(this.apiUrlAuth, bodyAuth).toPromise();
    this.chronos.resetTimeout()
    return this.user
  }
}
