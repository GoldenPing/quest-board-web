import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import Planification from '../planification.model';
import { Participe } from '../participe.model';
import { ParticipeService } from '../participe.service';

@Component({
  selector: 'app-participe-list',
  templateUrl: './participe-list.component.html',
  styleUrls: ['./participe-list.component.scss'],
})
export class ParticipeListComponent  implements OnInit {

  plan?: Planification
  participes? : Participe[]
  user_name_log = localStorage.getItem("username")
  
  constructor(
    private navParams : NavParams,
    private modalController: ModalController,
    private participeService : ParticipeService,
    ) { }

 async ngOnInit() {
    this.plan = this.navParams.get<Planification>('planification')
    this.participes = this.plan?.participes
    console.log(this.user_name_log);
    
  }
  onClose(){
    this.modalController.dismiss()
  }
  onClick(id_part:number){
    let participeToUpdate: Participe | undefined
    participeToUpdate = this.participes?.find(e => e.id_part === id_part)
    this.participes = this.participes?.filter(e => e.id_part !== id_part)
    if(participeToUpdate !== undefined){
    if (participeToUpdate?.non_part !== undefined &&participeToUpdate?.oui_part !== undefined ) {
      const save = participeToUpdate.non_part 
      participeToUpdate.non_part = participeToUpdate?.oui_part
      participeToUpdate.oui_part = save
        
    }

    this.participes?.push(participeToUpdate)
    this.participes?.sort((a,b) => a.id_part - b.id_part )
    this.participeService.update(id_part,{
      oui_part : participeToUpdate.oui_part,
      non_part : participeToUpdate.non_part,
    })
    }  
    
  }
}
