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
import { AuthGuardService } from './auth.guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'planification/planification-list',
    pathMatch: 'full'
  },
  {path: 'planification/planification-list', component : PlanificationListComponent, canActivate: [AuthGuardService]},
  {
    path: 'planification/planification-add',
    component:PlanificationAddComponent
  },
  {
    path: 'planification/planification-one/:id',
    component:PlanificationOneComponent, canActivate: [AuthGuardService]

  },
  {
    path: 'planification/planification-update',
    component:PlanificationUpdateComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'imprevues/imprevues-add',
    component:ImprevuesAddComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'imprevue/imprevue-list',
    component:ImprevuesListComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'my-imprevue/imprevue-list',
    component: MyImprevuesComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
