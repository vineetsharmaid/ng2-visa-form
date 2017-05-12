import { Component, ViewContainerRef } from '@angular/core';
import { MdDialogConfig, MdDialog, MdDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

export class VisaDetails {
	orgName: string;
	licenceNum: string;
}

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent{

		form: FormGroup;
		submitted: boolean;
		visa: VisaDetails = {
			orgName: '',
			licenceNum: '',
		};

	 tabLinks = [
    {label: 'Organization Details', link: 'organization'},
    {label: 'Personal Details', link: 'personal'},    
    {label: 'Visa Details', link: 'visa'},
  ];

  selectedTab = 0;

  visaTypes = [
    {value: '1', viewValue: 'New Visa'},
  ];

  applicantStatus = [
    {value: '1', viewValue: 'First time in UAE'},
    {value: '2', viewValue: 'Had previous work permit'},
  ];

  appTypes = [
    {value: '1', viewValue: 'Employment visa'},
    {value: '2', viewValue: 'Dependant work permit 2 years'},
    {value: '3', viewValue: 'Temporary work permit 6 months'},
    {value: '4', viewValue: 'Partner visa'},
    {value: '5', viewValue: 'Family dependant visa'},
    {value: '6', viewValue: 'Maid visa'},
  ];

  processTimes = [
    {value: '1', viewValue: 'Urgent'},
    {value: '2', viewValue: 'Normal'},
  ];

  appStatusOptions = [
    {value: '1', viewValue: 'Outside UAE'},
    {value: '2', viewValue: 'Inside UAE on cancelled residency'},
    {value: '3', viewValue: 'Inside UAE on Tourist visa/Visit visa'},
    {value: '4', viewValue: 'Inside UAE on entry stamp'},
  ];

  changeOptions = [
    {value: '1', viewValue: 'Change status inside UAE on cancelled residency'},
    {value: '2', viewValue: 'Will exit the country'},
  ];

  medicalServices = [
    {value: '1', viewValue: 'Normal 5 days'},
    {value: '2', viewValue: 'Urgent 48 hours'},
    {value: '3', viewValue: 'Urgent 24 hours'},
    {value: '4', viewValue: 'VIP 3 hours'},
  ];

  contractTypes = [
    { value: '1', viewValue: 'Limited' },
    { value: '2', viewValue: 'Unlimited' },
  ];

  weeklyHolidays = [
    { value: '1', viewValue: '1 day' },
    { value: '2', viewValue: '2 days' },
  ];

  probationPeriods = [
    { value: '1', viewValue: '1 month' },
    { value: '2', viewValue: '2 month' },
    { value: '3', viewValue: '3 month' },
    { value: '4', viewValue: '4 month' },
    { value: '5', viewValue: '5 month' },
    { value: '6', viewValue: '6 month' },
  ];

  noticePeriods = [
    { value: '1', viewValue: '1 month' },
    { value: '2', viewValue: '2 month' },
    { value: '3', viewValue: '3 month' },
    { value: '4', viewValue: '4 month' },
    { value: '5', viewValue: '5 month' },
    { value: '6', viewValue: '6 month' },
  ];

  constructor( private formBuilder: FormBuilder, private router: Router ) { 
		this.submitted=false;
   	this.form = formBuilder.group({
    	// lastname: ['', Validators.required],
    });
  }

  ngOnInit() {
    
  }

  onSubmit(form) {

    this.submitted=true;
    
    if(form.valid)
    {
      console.log('form submitted');
    }
  }



  nextTab() {
    
    this.selectedTab += 1;
  	if (this.selectedTab >= 4) this.selectedTab = 0;
  }

  previousTab() {

    this.selectedTab -= 1;
  	if (this.selectedTab == 0) this.selectedTab = 0;
  }

}
