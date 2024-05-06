import { Component, OnInit } from '@angular/core';
import { ImprevuesService } from '../imprevues.service';
import { Imprevues } from '../imprevue.model';
import { ModalController } from '@ionic/angular';
import { ImprevuesOneComponent } from '../imprevues-one/imprevues-one.component';

@Component({
  selector: 'app-imprevues-list',
  templateUrl: './imprevues-list.component.html',
  styleUrls: ['./imprevues-list.component.scss'],
})
export class ImprevuesListComponent  implements OnInit {

  imps?: Imprevues[]
  constructor(private imprevuesService : ImprevuesService, private modalControler : ModalController) { }

  async ngOnInit() {
    this.imps = await this.imprevuesService.getAll()
    console.log(this.imps);
    
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
