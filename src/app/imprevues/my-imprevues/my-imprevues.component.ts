import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Imprevues } from '../imprevue.model';
import { ImprevuesOneComponent } from '../imprevues-one/imprevues-one.component';
import { ImprevuesService } from '../imprevues.service';

@Component({
  selector: 'app-my-imprevues',
  templateUrl: './my-imprevues.component.html',
  styleUrls: ['./my-imprevues.component.scss'],
})
export class MyImprevuesComponent  implements OnInit {

  id_user = 2
  imps?: Imprevues[]
  constructor(private imprevuesService : ImprevuesService, private modalControler : ModalController) { }

  async ngOnInit() {
    const imps = await this.imprevuesService.getAll()

    if(imps){
      this.imps = imps.filter(e => e.user.id_user === this.id_user)
    }
  }

 async onClick(id : number){
    console.log(id);
    const modal = await this.modalControler.create({
      component : ImprevuesOneComponent,
      componentProps: {
        id_imp : id
      }
    })

    await modal.present()
  }
}