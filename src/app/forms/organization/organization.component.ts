import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './organization.html',
  styleUrls: ['./organization.css']
})
export class OrganizationComponent implements OnInit {
  // form: FormGroup;
  visaTypes = [
    {value: '1', viewValue: 'New Visa'},
  ];
  constructor(
    // private userService: UserService,
    // private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    // this.userService.user$
    //   .subscribe(user => {
    //     this.initForm(user);
    //     this.handleFormChanges();
    //   });
  }

  // initForm(user: UserProfile) {
  //   this.form = this.fb.group({
  //     firstName: [user.firstName, Validators.required],
  //     lastName: [user.lastName, Validators.required],
  //     gender: [user.gender],
  //     isAwesome: [user.isAwesome],
  //     awesomenessReason: [user.awesomenessReason]
  //   });
  // }

  // handleFormChanges() {
  //   this.form.get('isAwesome').valueChanges.subscribe(value => {
  //     if (!value) {
  //       this.form.get('awesomenessReason').setValue('');
  //     }
  //   });
  // }

  next() {
    // this.userService.updateUser(this.form.value);
    this.router.navigateByUrl('personal');
  }
}
