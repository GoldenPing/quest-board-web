import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppService } from '../app.service';
import { CreateImprevuDto } from './imprevue.model.dto';
import { Imprevues } from './imprevue.model';

@Injectable({
  providedIn: 'root'
})
export class ImprevuesService extends AppService{
  private apiUrlImprevue = 'http://localhost:3000/imprevue'
  override user:any
  constructor(http: HttpClient) {
    super(http);
  
    
  }
  async create(dtoImprevue : CreateImprevuDto){
    this.user = await super.InitService()
    const bodyHttp = {
      user : this.user,...dtoImprevue
    }
    console.log(bodyHttp);
    await this.http.post<Imprevues>(this.apiUrlImprevue,bodyHttp).toPromise()
    return true 
  }
}
