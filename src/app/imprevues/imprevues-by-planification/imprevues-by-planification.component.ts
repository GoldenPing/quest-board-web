import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';
import { DataPlanificationService } from 'src/app/dataPlanificationService';
import Planification from 'src/app/planification/planification.model';

@Component({
  selector: 'app-imprevues-by-planification',
  templateUrl: './imprevues-by-planification.component.html',
  styleUrls: ['./imprevues-by-planification.component.scss'],
})
export class ImprevuesByPlanificationComponent  implements OnInit {

  plan? : Planification
  titre : string = ''
  constructor(
    private navParams : NavParams, 
    private modalController: ModalController,
    private DataService : DataPlanificationService) {
  }

  ngOnInit() {
    this.plan = this.navParams.get<Planification>('planification')
    this.titre = "Imprevues de : " + this.plan.title_plan
    
  }

  onClose(){
    this.modalController.dismiss()
  }

  onAdd(){
    this.modalController.dismiss()
    this.DataService.setPlanification(this.plan)
  }
}
