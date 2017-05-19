import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { FormsComponent } from './forms/forms.component';
import { EmploymentVisaComponent } from './forms/employment-visa/employment-visa.component';
import { TemporaryVisaComponent } from './forms/temporary-visa/temporary-visa.component';
import { PartnerVisaComponent } from './forms/partner-visa/partner-visa.component';
import { FamilyVisaComponent } from './forms/family-visa/family-visa.component';
import { MaidVisaComponent } from './forms/maid-visa/maid-visa.component';
import { VisaComponent } from './forms/visa/visa.component';

const routes: Routes = [
  {path: '',  								component: LandingComponent},
  {path: 'dependant-visa',  	component: FormsComponent},
  {path: 'employment-visa',    component: EmploymentVisaComponent},
  {path: 'temporary-visa',    component: TemporaryVisaComponent},
  {path: 'partner-visa',    	component: PartnerVisaComponent},
  {path: 'family-visa',    		component: FamilyVisaComponent},
  {path: 'maid-visa',    			component: MaidVisaComponent},
  {path: 'visa',    					component: VisaComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Ng2MultiStepFormRoutingModule { }
