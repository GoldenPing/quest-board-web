import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataPlanificationService } from 'src/app/dataPlanificationService';
import Planification from 'src/app/planification/planification.model';
import { ImprevuesService } from '../imprevues.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-imprevues-add',
  templateUrl: './imprevues-add.component.html',
  styleUrls: ['./imprevues-add.component.scss'],
})
export class ImprevuesAddComponent  implements OnInit {

  plan?: Planification
  imprevueForm : FormGroup = this.formBuilder.group({
    raison_imp: ["",[Validators.required, Validators.maxLength(250)]],
    peuDecaler_imp: [false,],
    disponiblilte_imp: ["", [Validators.maxLength(50)]]
  })
  constructor(
    private formBuilder : FormBuilder, 
    private dataService: DataPlanificationService,
    private imprevueService : ImprevuesService,
  private router : Router) { }

  ngOnInit() {
    console.log(this.imprevueForm.value.peuDecaler_imp);
    this.imprevueForm.get('disponibilite_imp')?.disable()
    this.plan = this.dataService.getPlanification()
    if (!this.plan) {
      this.router.navigate(['planification/planification-list']);
    }
    
  }

 async onSubmit(){
    if (this.imprevueForm.valid) {
      this.plan = this.dataService.getPlanification()
      console.log(this.plan?.id_plan);
      
      let dtoImprevue = {
        ...this.imprevueForm.value, plan_id : this.plan?.id_plan, user_id : 2
      }
      if(!this.imprevueForm.value.peuDecaler_imp){
        dtoImprevue = {... dtoImprevue, disponiblilte_imp :''}
      }
      console.log(dtoImprevue);
      
      await this.imprevueService.create(dtoImprevue)
      this.router.navigate(['planification/planification-one', this.plan?.id_plan])
    }
  
  }

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} caractères restant`;
  }
  onchange(){
    console.log(this.imprevueForm.value.peuDecaler_imp);
    
    if (this.imprevueForm.value.peuDecaler_imp) {
      this.imprevueForm.get('disponibilite_imp')?.enable()
      
    }else{
      this.imprevueForm.get('disponibilite_imp')?.setValue('')
      this.imprevueForm.get('disponibilite_imp')?.disable()
    }
  }
  onReturn(){
    this.router.navigate(['/planification/planification-one',this.plan?.id_plan])
  }
}
