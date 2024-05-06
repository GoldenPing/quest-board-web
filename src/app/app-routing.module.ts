import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PlanificationModule } from './planification/planification.module';
import { PlanificationListComponent } from './planification/planification-list/planification-list.component';
import { PlanificationAddComponent } from './planification/planification-add/planification-add.component';
import { PlanificationOneComponent } from './planification/planification-one/planification-one.component';
import { ImprevuesAddComponent } from './imprevues/imprevues-add/imprevues-add.component';
import { PlanificationUpdateComponent } from './planification/planification-update/planification-update.component';
import { ImprevuesListComponent } from './imprevues/imprevues-list/imprevues-list.component';
import { ImprevuesOneComponent } from './imprevues/imprevues-one/imprevues-one.component';
import { MyImprevuesComponent } from './imprevues/my-imprevues/my-imprevues.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'planification/planification-list',
    pathMatch: 'full'
  },
  {path: 'planification/planification-list', component : PlanificationListComponent},
  {
    path: 'planification/planification-add',
    component:PlanificationAddComponent
  },
  {
    path: 'planification/planification-one/:id',
    component:PlanificationOneComponent
  },
  {
    path: 'planification/planification-update',
    component:PlanificationUpdateComponent
  },
  {
    path: 'imprevues/imprevues-add',
    component:ImprevuesAddComponent
  },
  {
    path: 'imprevue/imprevue-list',
    component:ImprevuesListComponent
  },
  {
    path: 'my-imprevue/imprevue-list',
    component: MyImprevuesComponent
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
