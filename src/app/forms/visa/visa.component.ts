import { Component, OnInit, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { slideInDownAnimation } from '../../animations';

@Component({
  selector: 'app-visa',
  templateUrl: './visa.html',
  styleUrls: ['./visa.css'],
  animations: [ slideInDownAnimation ]
})

export class VisaComponent implements OnInit {
  // form: FormGroup;

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  @HostBinding('style.width')     width = '90%';
  @HostBinding('style.padding')   padding = '0% 3% 0% 3%';

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

  constructor(
    // private healthService: HealthService,
    // private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    // this.healthService.health$
    //   .subscribe(this.initForm.bind(this));
  }

  
  back() {
    this.router.navigateByUrl('personal');
  }

  next() {
    // this.healthService.updateHealth(this.form.value);
    this.router.navigateByUrl('organization');
  }
}
