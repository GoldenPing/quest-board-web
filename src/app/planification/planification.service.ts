import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import Planification from "./planification.model";
import { createPlanificationDto } from "./planification.model.dto";
import { AppService } from "../app.service";
import { Chronos } from "../chronos.service";

@Injectable({
    providedIn: "root"
})
export class PlanificationService extends AppService {
    private apiUrlPlanification = 'http://109.176.199.201:3000/planification'



    constructor( http: HttpClient, chronos : Chronos){
        super(http,chronos)
    }



    async getPlanfications(){
       const retour = await this.http.get<Planification[]>(this.apiUrlPlanification).toPromise()
       return retour
    }

    async postPlanification(dtoPlanification : createPlanificationDto){
        await this.InitService()
        const bodyHttp = {user : this.user,...dtoPlanification}
        const retour = await this.http.post(this.apiUrlPlanification,bodyHttp).toPromise()
    }

    async getPlanification(id: string){
        const retour = await this.http.get<Planification>(this.apiUrlPlanification+ '/' + id).toPromise()
        return retour
    }

    async patchPlanification(id:number, planification: Planification){
        await this.InitService()
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
        console.log( bodyHttp);

      const retour = await this.http.patch(this.apiUrlPlanification+'/'+id,bodyHttp).toPromise()


    }
}
