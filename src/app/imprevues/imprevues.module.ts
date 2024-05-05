import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ImprevuesByPlanificationComponent } from './imprevues-by-planification/imprevues-by-planification.component';
import { RouterModule } from '@angular/router';
import { ImprevuesAddComponent } from './imprevues-add/imprevues-add.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ImprevuesByPlanificationComponent,ImprevuesAddComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class ImprevuesModule { }
