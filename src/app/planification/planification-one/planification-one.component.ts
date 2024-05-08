import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router, RouterModule } from '@angular/router';
import { PlanificationService } from '../planification.service';
import Planification from '../planification.model';
import { ModalController } from '@ionic/angular';
import { ImprevuesByPlanificationComponent } from 'src/app/imprevues/imprevues-by-planification/imprevues-by-planification.component';
import { ParticipeListComponent } from '../participe-list/participe-list.component';
import { PlanificationDeleteComponent } from '../planification-delete/planification-delete.component';
import { DataPlanificationService } from 'src/app/dataPlanificationService';

@Component({
  selector: 'app-planification-one',
  templateUrl: './planification-one.component.html',
  styleUrls: ['./planification-one.component.scss'],
})
export class PlanificationOneComponent  implements OnInit {

  plan? : Planification
  btnImprevueColor = 'success'
  btnParticipeColor = 'success'
  admin : boolean = false
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private planificationService : PlanificationService,
    private modalControler : ModalController,
    private dataService : DataPlanificationService) { }

  ngOnInit() {
    this.admin = localStorage.getItem('admin') === '1'
    this.route.params.subscribe( async params => {
      this.plan = await this.planificationService.getPlanification(params['id'])
      console.log('hello');
      if(this.plan){
        if (this.plan.imprevues) {
        const sumImprevueDead = this.plan.imprevues.filter(e => e.peuDecaler_imp === 0).length
          if (sumImprevueDead > 0) {
            this.btnImprevueColor = 'danger'
          }else{
            const sumImprevueMb = this.plan.imprevues.filter(e => e.peuDecaler_imp === 1).length
            if(sumImprevueMb > 0){
              this.btnImprevueColor = 'warning'

            }
          }
        }
        if(this.plan.participes){
          const sumParticipe = this.plan.participes.filter(e => e.non_part == 1).length
          if(sumParticipe === 6){
            this.btnParticipeColor ='danger'
          }else if(sumParticipe >=2){
            this.btnParticipeColor ='warning'
          }
        }
      }

    })

  }

  onReturn(){
    const navigationExtra: NavigationExtras = {
      queryParams: {"refresh" : true}
    }
    this.router.navigate(['/planification/planification-list'],navigationExtra)

  }
  async onImprevue(){
    const modal = await this.modalControler.create({
      component : ImprevuesByPlanificationComponent,
      componentProps: {
        planification: this.plan
      }
    })
    await modal.present()
  }
  async onParticipe(){
    const modal = await this.modalControler.create({
      component : ParticipeListComponent,
      componentProps: {
        planification: this.plan
      }
    })
    await modal.present()
  }

  async onDelete(){
    const deletePlan = await this.modalControler.create({
      component : PlanificationDeleteComponent,
      componentProps: {
        id_plan: this.plan?.id_plan
      }
    })

    await deletePlan.present()
  }

  async onUpdate(){
    this.dataService.setPlanification(this.plan)


  }
}
