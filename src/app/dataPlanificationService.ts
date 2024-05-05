import { Injectable } from "@angular/core";
import Planification from "./planification/planification.model";

@Injectable({
    providedIn: "root"
})
export class DataPlanificationService{
    private planification?: Planification;

    constructor(){}

    setPlanification(planification?:Planification){
        this.planification = planification
    }

    getPlanification(){
        return this.planification
    }
}