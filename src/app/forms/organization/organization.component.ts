import { Component, OnInit, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { slideInDownAnimation } from '../../animations';

export class Org {
  visaType: number;
  appStatus: number;
  appType: number;
  processTime: number;
}

@Component({
  selector: 'app-org',
  templateUrl: './organization.html',
  styleUrls: ['./organization.css'],
  animations: [ slideInDownAnimation ]
})
export class OrganizationComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  @HostBinding('style.width')     width = '90%';
  @HostBinding('style.padding')   padding = '0% 3% 0% 3%';

  org: Org;

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

  activeLinkIndex: any; 

  constructor(
    // private userService: UserService,
    // private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    console.log('activeLinkIndex', this.activeLinkIndex);
  }


  next() {
    // this.userService.updateUser(this.form.value);
    this.activeLinkIndex = 1; 
    this.router.navigateByUrl('personal');
  }
}
