import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PlanificationListComponent } from './planification-list/planification-list.component';
import { PlanificationAddComponent } from './planification-add/planification-add.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PlanificationOneComponent } from './planification-one/planification-one.component';
import { ImprevuesModule } from '../imprevues/imprevues.module';
import { ParticipeListComponent } from './participe-list/participe-list.component';
import { PlanificationDeleteComponent } from './planification-delete/planification-delete.component';
import { PlanificationUpdateComponent } from './planification-update/planification-update.component';



@NgModule({
  declarations: [
    PlanificationListComponent,
    PlanificationAddComponent,
    PlanificationOneComponent, 
    ParticipeListComponent,
    PlanificationDeleteComponent,
    PlanificationUpdateComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    ReactiveFormsModule,
    ImprevuesModule
  ]
})
export class PlanificationModule { }
