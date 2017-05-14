import { Component, ViewContainerRef } from '@angular/core';
import { MdDialogConfig, MdDialog, MdDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {IMyOptions} from 'mydatepicker';
import { DataService } from './data.service';

import 'loaders.css/loaders.min.css';

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

  applicantStatusOptions = [
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

  isRequired 		= false;
  isDisabled 		= false;
  isOpenOnFocus = false;
  dobOpen 			= false;
  expiryOpen 		= false;
  issueOpen 		= false;
  today: Date 	= new Date();

  type: string 			= 'date';
  mode: string 			= 'portrait';
  container: string = 'inline';

  date: Date 		= null;
  minDate: Date = null;
  maxDate: Date = null;

  enableDates: Array<Date> = [
    new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() - 7),
    new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() - 1),
    new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 5),
    new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 7),
    new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 8)
  ];
  // disableDates: Array<Date> = [
  //   new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() - 2),
  //   new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() - 1),
  //   new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 2),
  //   new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 5),
  //   new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 9)
  // ];
  // disableWeekDays: Array<number> = [0, 6];

  dateField: string;

  openDatepicker(dateField) {
    dateField = true;
    setTimeout(() => {
      dateField = false;
    }, 1000);

  	// form.controls[field];
		// ctrl.markAsTouched();
  }

  setDate() {
    this.date = new Date(this.today);
  }

  // setDateRange() {
  //   this.minDate = new Date(this.today);
  //   this.minDate.setMonth(this.minDate.getMonth() - 3);
  //   this.maxDate = new Date(this.today);
  //   this.maxDate.setMonth(this.maxDate.getMonth() + 3);
  // }


  public genders: Array<Object>;
  public countries: Array<Object>;
  public religions: Array<Object>;
  public mStatusOptions: Array<Object>;
  public eduOptions: Array<Object>;
  public designations: Array<Object>;
  private myDatePickerOptions: IMyOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
  };

  constructor( private formBuilder: FormBuilder, private router: Router, private _dataService: DataService ) { 
		this.submitted=false;
   	this.form = formBuilder.group({
    	// lastname: ['', Validators.required],
    });
  }

  ngOnInit() {
    
    this.loadGenders();
    this.loadCountries();
    this.loadReligions();
    this.loadMaritialStatus();
    this.loadEducationOptions();
    this.loadDesignations();
  }

  loadGenders() {

  	this.genders = this._dataService.getGenders();
  }

  loadDesignations() {

  	this.designations = this._dataService.getDesignations();
  }

  loadEducationOptions() {

  	this.eduOptions = this._dataService.getEducationOptions();
  }

  loadMaritialStatus() {

  	this.mStatusOptions = this._dataService.getMaritialStatus();
  }

  loadReligions() {

  	this.religions = this._dataService.getReligion();
  }

  loadCountries() {
  	// loads list of countries
  	this.countries = this._dataService.getCountries();
  }

  onSubmit(form) {
  	
    this.submitted=true;
    // console.log(form.controls);
    let field = '';
    for( field in form.controls ) {
    	const ctrl = form.controls[field];
			ctrl.markAsTouched();
    }
    
    if(form.valid)
    {
      console.log('form submitted');
    } else {
    	console.log('here');
    }
  }



  nextTab(form) {
   	
    if(form.valid)
    {
	  	this.submitted=true;
      
      // move to next tab
	    this.selectedTab += 1;
	  	if (this.selectedTab >= 4) this.selectedTab = 0;
    
    } else {
    	console.log('validation failed');
    	let field = '';
	    // set all field's state in form to touched to show errors on form submit
	    for( field in form.controls ) {
	    	const ctrl = form.controls[field];
				ctrl.markAsTouched();
	    }
    }


  }

  previousTab() {

    this.selectedTab -= 1;
  	if (this.selectedTab == 0) this.selectedTab = 0;
  }

}
