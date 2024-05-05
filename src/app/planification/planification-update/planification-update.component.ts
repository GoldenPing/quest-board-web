import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PlanificationService } from '../planification.service';
import { DataPlanificationService } from 'src/app/dataPlanificationService';
import Planification from '../planification.model';

@Component({
  selector: 'app-planification-update',
  templateUrl: './planification-update.component.html',
  styleUrls: ['./planification-update.component.scss'],
})
export class PlanificationUpdateComponent  implements OnInit {
  plan?: Planification 
  planificationForm: FormGroup = 
  this.formBuilder.group({
    title_plan : ["", [Validators.required, Validators.maxLength(50)]],
    date_plan : ["", [Validators.required, Validators.maxLength(8)]],
    heure_plan : ["", [Validators.required, Validators.maxLength(5)]],
    mj_plan : ["", [Validators.required, Validators.maxLength(10)]],
    theme_plan : ["", [Validators.required, Validators.maxLength(30)]],
    desc_plan : ["", [ Validators.maxLength(200)]]
  })
  constructor(private formBuilder: FormBuilder, 
    private planificationService: PlanificationService,
    private dataService : DataPlanificationService,
    private router :Router) { }

  ngOnInit() {
    console.log(this.plan);  

    this.plan = this.dataService.getPlanification()
    if (!this.plan) {
      this.router.navigate(['planification/planification-list']);
    }
    
  }

  onSubmit(){}

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} caractères restant`;
  }

  onReturn(){
    this.router.navigate(['/planification/planification-one',this.plan?.id_plan])
  }
}
