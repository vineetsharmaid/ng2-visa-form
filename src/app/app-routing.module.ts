import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { OrganizationComponent } from './forms/organization/organization.component';
import { PersonalComponent } from './forms/personal/personal.component';
import { VisaComponent } from './forms/visa/visa.component';

const routes: Routes = [
  {path: '',  component: FormsComponent},
  {path: 'organization',    component: OrganizationComponent},
  {path: 'personal',    component: PersonalComponent},
  {path: 'visa',    component: VisaComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Ng2MultiStepFormRoutingModule { }
