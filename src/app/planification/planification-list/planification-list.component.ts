import { Component, OnInit } from '@angular/core';
import { PlanificationService } from '../planification.service';
import { IonicModule } from '@ionic/angular'; // Importe IonicModule
import Planification from '../planification.model';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-planification-list',
  templateUrl: './planification-list.component.html',
  styleUrls: ['./planification-list.component.scss'],
})
export class PlanificationListComponent  implements OnInit {

  data? : Planification[]
  admin : boolean = false
  constructor(private planificationService: PlanificationService, private route: ActivatedRoute ) { }

  async ngOnInit() {
    this.admin = localStorage.getItem('admin') === '1'
    
    this.route.queryParams.subscribe((params: Params) => {
      if (params["refresh"]) {
       
      }
       this.reloadData();

    });
  }

  async reloadData(){
    try {
      this.data =await this.planificationService.getPlanfications()
      
    }catch(error){
      console.log(error);
      
    }
  }

}
