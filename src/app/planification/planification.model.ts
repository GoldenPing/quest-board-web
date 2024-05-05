import { Imprevues } from "../imprevues/imprevue.model"
import { Participe } from "./participe.model"

export enum EtatPlanification{
    CREER = 'Cr',
    VALIDER = 'V',
    CONTESTER = 'Co',
    ANNULER = 'An',
    TERMINER = "T"
}

export default class Planification {
    id_plan!: number
    title_plan!: string
    date_plan!: string
    heure_plan!: string
    mj_plan!: string
    theme_plan!: string
    etat_plan!: EtatPlanification
    desc_plan?: string;
    imprevues?: Imprevues[];
    participes?: Participe[]

    constructor(
        id_plan: number,
        title_plan: string,
        date_plan: string,
        heure_plan: string,
        mj_plan: string,
        theme_plan: string,
        etat_plan: EtatPlanification,
        desc_plan?: string
    ){
        this.id_plan = id_plan
        this.title_plan = title_plan
        this.date_plan = date_plan
        this.heure_plan = heure_plan
        this.mj_plan = mj_plan
        this.theme_plan = theme_plan
        this.etat_plan = etat_plan
        this.desc_plan = desc_plan
    }
}