import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppService } from '../app.service';
import { CreateImprevuDto } from './imprevue.model.dto';
import { Imprevues } from './imprevue.model';
import { Chronos } from '../chronos.service';

@Injectable({
  providedIn: 'root'
})
export class ImprevuesService extends AppService{
  
  private apiUrlImprevue = 'http://localhost:3000/imprevue'
  override user:any
  constructor(http: HttpClient, chronos: Chronos) {
    super(http, chronos);
  
    
  }
  async create(dtoImprevue : CreateImprevuDto){
    this.user = await super.InitService()
    const bodyHttp = {
      user : this.user,...dtoImprevue
    }
    await this.http.post<Imprevues>(this.apiUrlImprevue,bodyHttp).toPromise()
    return true 
  }

  async getAll(){
    const retour = await this.http.get<Imprevues[]>(this.apiUrlImprevue).toPromise()
    
    return retour
  }

  async getOne(id : number){
    const retour = await this.http.get<Imprevues>(this.apiUrlImprevue+'/'+ id).toPromise()
    return retour
  }  

  
  async delete(id: number) {
    const retour = await this.http.delete(this.apiUrlImprevue+'/'+id).toPromise()
  }
}
