import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private apiUrlAuth = 'http://localhost:3000/auth'
  public user: any =""
  private username = localStorage.getItem('username')
  private mdp = localStorage.getItem('username')
  private idUser = localStorage.getItem('id_user')
  constructor( protected http : HttpClient) {}

  async InitService(){
    const bodyAuth = { "password": this.mdp, "username":this.username }
    this.user = await this.http.post<any>(this.apiUrlAuth, bodyAuth).toPromise();
    return this.user
  }
}
