import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import Planification from "./planification.model";
import { createPlanificationDto } from "./planification.model.dto";

@Injectable({
    providedIn: "root"
})
export class PlanificationService {
    private apiUrlPlanification = 'http://localhost:3000/planification'
    private apiUrlAuth = 'http://localhost:3000/auth'
    protected user: any
    private username = 'admin'
    private mdp ='hop'



    constructor(protected http: HttpClient){ 
    }

    async initService(){
        const bodyAuth = { "password": this.mdp, "username":this.username }
        this.user = await this.http.post<any>(this.apiUrlAuth, bodyAuth).toPromise();
    }

    async getPlanfications(){
        this.initService()
       const retour = await this.http.get<Planification[]>(this.apiUrlPlanification).toPromise()
       return retour
    }

    async postPlanification(dtoPlanification : createPlanificationDto){
        await this.initService()
        const bodyHttp = {user : this.user,...dtoPlanification}
        const retour = await this.http.post(this.apiUrlPlanification,bodyHttp).toPromise()
    }

    async getPlanification(id: string){
        await this.initService()
        const retour = await this.http.get<Planification>(this.apiUrlPlanification+ '/' + id).toPromise()
        return retour
    }
    
    async patchPlanification(id:number, planification: Planification){
        await this.initService()
        const bodyHttp = {
            user : this.user, 
            title_plan : planification.title_plan,
            date_plan: planification.date_plan,
            heure_plan: planification.heure_plan,
            mj_plan: planification.mj_plan,
            theme_plan: planification.theme_plan,
            desc_plan: planification.desc_plan,
            etat_plan : planification.etat_plan
        }
        
      const retour = await this.http.patch(this.apiUrlPlanification+'/'+id,bodyHttp).toPromise()

        
    }
}