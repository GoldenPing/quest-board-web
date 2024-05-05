import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlanificationService } from '../planification.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-planification-add',
  templateUrl: './planification-add.component.html',
  styleUrls: ['./planification-add.component.scss'],
})
export class PlanificationAddComponent  implements OnInit {

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
    private router :Router) { }

  ngOnInit() {
  }

  async onSubmit(){
    if(this.planificationForm.valid){
      await this.planificationService.postPlanification(this.planificationForm.value)
      const navigationExtra: NavigationExtras = {
        queryParams: {"refresh" : true}
      }
      this.router.navigate(['/planification/planification-list'],navigationExtra)
    }
  }
  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} caractères restant`;
  }
}
