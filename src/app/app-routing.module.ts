import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { OrganizationComponent } from './forms/organization/organization.component';
import { PersonalComponent } from './forms/personal/personal.component';

const routes: Routes = [
  {path: '',        redirectTo: '/organization', pathMatch: 'full'},
  {path: 'organization',    component: OrganizationComponent},
  {path: 'personal',    component: PersonalComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Ng2MultiStepFormRoutingModule { }
