import { FunctionExpr } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProgramTemplateComponent } from './Components/add-program-template/add-program-template.component';
import { AddProgramComponent } from './Components/add-program/add-program.component';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { EditProgramTemplateComponent } from './Components/edit-program-template/edit-program-template.component';
import { EditProgramComponent } from './Components/edit-program/edit-program.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { ManageProfileComponent } from './Components/manage-profile/manage-profile.component';
import { ManageProgramComponent } from './Components/manage-program/manage-program.component';
import { ProgramTemplateComponent } from './Components/program-template/program-template.component';
import { ViewContributortypeComponent } from './Components/view-contributortype/view-contributortype.component';
import { ViewParticipantComponent } from './Components/view-participant/view-participant.component';
import { ViewProgramComponent } from './Components/view-program/view-program.component';

const routes: Routes = [
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
  },

  {
    path: 'program-template',
    component: ProgramTemplateComponent,
  },
  {
    path: 'add-program',
    component: AddProgramComponent,
  },
  // {
  //   path: 'add-program-template',
  //   component: AddProgramTemplateComponent,
  // },
  {
    path: 'view-program',
    component: ViewProgramComponent,
  },

  {
    path: 'edit-program',
    component: EditProgramComponent,
  },
  // {
  //   path: 'edit-program-template',
  //   component: EditProgramTemplateComponent,
  // },

  {
    path: 'manage-program',
    component: ManageProgramComponent,
  },
  {
    path: 'manage-profile',
    component: ManageProfileComponent,
  },
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'view-participant/:id/:title/:weightage',
    component: ViewParticipantComponent,
  },
  {
    path: 'view-contributortype',
    component: ViewContributortypeComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
