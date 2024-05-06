import { Component, OnInit } from '@angular/core';
import { Imprevues } from '../imprevue.model';
import { ModalController, NavParams } from '@ionic/angular';
import { ImprevuesService } from '../imprevues.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-imprevues-one',
  templateUrl: './imprevues-one.component.html',
  styleUrls: ['./imprevues-one.component.scss'],
})
export class ImprevuesOneComponent  implements OnInit {

  imp?: Imprevues

  constructor(
    private naParams : NavParams,
    private modalController : ModalController,
    private imprevuesService : ImprevuesService,
    private router : Router
  ) { }

  async ngOnInit() {
    const id = this.naParams.get<number>('id_imp')
    this.imp = await this.imprevuesService.getOne(id)
  }

  onClose(){
    this.modalController.dismiss()
  }

 async onDelete(){
    if (this.imp) {
      await this.imprevuesService.delete(this.imp.id_imp)
    }
    this.modalController.dismiss()
    window.location.reload()

  }
}
