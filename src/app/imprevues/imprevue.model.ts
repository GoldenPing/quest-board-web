import Planification from "../planification/planification.model"

export class Imprevues {
    id_imp! : number
    raison_imp! : string
    peuDecaler_imp! : number
    disponiblilte_imp? : string
    planification!: Planification

}