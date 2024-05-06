import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ImprevuesByPlanificationComponent } from './imprevues-by-planification/imprevues-by-planification.component';
import { RouterModule } from '@angular/router';
import { ImprevuesAddComponent } from './imprevues-add/imprevues-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ImprevuesListComponent } from './imprevues-list/imprevues-list.component';
import { ImprevuesOneComponent } from './imprevues-one/imprevues-one.component';
import { MyImprevuesComponent } from './my-imprevues/my-imprevues.component';



@NgModule({
  declarations: [
    ImprevuesByPlanificationComponent,
    ImprevuesAddComponent,
    ImprevuesListComponent,
    ImprevuesOneComponent,
    MyImprevuesComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class ImprevuesModule { }
