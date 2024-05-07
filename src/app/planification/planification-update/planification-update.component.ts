import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PlanificationService } from '../planification.service';
import { DataPlanificationService } from 'src/app/dataPlanificationService';
import Planification, { EtatPlanification } from '../planification.model';

@Component({
  selector: 'app-planification-update',
  templateUrl: './planification-update.component.html',
  styleUrls: ['./planification-update.component.scss'],
})
export class PlanificationUpdateComponent  implements OnInit {

  valueEnum = Object.values(EtatPlanification)
  keyEnum = Object.keys(EtatPlanification)
  EtatPlanification = EtatPlanification


  plan?: Planification 
  planificationForm: FormGroup = 
  this.formBuilder.group({
    title_plan : ["", [Validators.required, Validators.maxLength(50)]],
    date_plan : ["", [Validators.required, Validators.maxLength(8)]],
    heure_plan : ["", [Validators.required, Validators.maxLength(5)]],
    mj_plan : ["", [Validators.required, Validators.maxLength(10)]],
    theme_plan : ["", [Validators.required, Validators.maxLength(30)]],
    desc_plan : ["", [ Validators.maxLength(200)]],
    etat_plan: ["", [Validators.required]]
  })
  constructor(private formBuilder: FormBuilder, 
    private planificationService: PlanificationService,
    private dataService : DataPlanificationService,
    private router :Router) { }

  ngOnInit() {

    this.plan = this.dataService.getPlanification()
    if (!this.plan) {
      this.router.navigate(['planification/planification-list']);
    }
    this.planificationForm.get('title_plan')?.setValue(this.plan?.title_plan)
    this.planificationForm.get('date_plan')?.setValue(this.plan?.date_plan)
    this.planificationForm.get('heure_plan')?.setValue(this.plan?.heure_plan)
    this.planificationForm.get('mj_plan')?.setValue(this.plan?.mj_plan)
    this.planificationForm.get('theme_plan')?.setValue(this.plan?.theme_plan)
    this.planificationForm.get('desc_plan')?.setValue(this.plan?.desc_plan)
    this.planificationForm.get('etat_plan')?.setValue(this.plan?.etat_plan)
    
  }

 async onSubmit(){
  if(this.planificationForm.valid){
    if(this.plan){
      await this.planificationService.patchPlanification(this.plan.id_plan,this.planificationForm.value)
      this.router.navigate(['/planification/planification-one',this.plan?.id_plan])

      
    }}
  }

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} caractères restant`;
  }

  onReturn(){
    this.router.navigate(['/planification/planification-one',this.plan?.id_plan])
  }
}
