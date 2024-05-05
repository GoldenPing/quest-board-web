import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { PlanificationService } from '../planification.service';
import { EtatPlanification } from '../planification.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planification-delete',
  templateUrl: './planification-delete.component.html',
  styleUrls: ['./planification-delete.component.scss'],
})
export class PlanificationDeleteComponent  implements OnInit {

  id? : number

  constructor(
    private modal : ModalController,
    private navParams : NavParams,
    private planificationService : PlanificationService,
    private router : Router

  ) { }

  ngOnInit() {
    this.id = this.navParams.get<number>('id_plan')
  }
  async onClick(){
    console.log('hello');
    
    if (this.id !== undefined){
      const plan = await this.planificationService.getPlanification(this.id?.toString())
      if(plan !== undefined){
        plan.etat_plan = EtatPlanification.TERMINER
        await this.planificationService.patchPlanification(this.id, plan)
        this.router.navigate(['planification/planification-list'])

        this.modal.dismiss()
      }
    }
  }
  onClose(){
    this.modal.dismiss()
  }
}
