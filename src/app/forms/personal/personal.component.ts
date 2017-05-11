import { Component, OnInit, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { slideInDownAnimation } from '../../animations';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.html',
  styleUrls: ['./personal.css'],
  animations: [ slideInDownAnimation ]
})

export class PersonalComponent implements OnInit {
  // form: FormGroup;

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  @HostBinding('style.width')     width = '90%';
  @HostBinding('style.padding')   padding = '0% 3% 0% 3%';

  constructor(
    // private healthService: HealthService,
    // private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    // this.healthService.health$
    //   .subscribe(this.initForm.bind(this));
  }

  // initForm(health: HealthProfile) {
  //   this.form = this.fb.group({
  //     height: [health.height],
  //     weight: [health.weight],
  //     bmi: [health.bmi]
  //   });
  // }

  back() {
    this.router.navigateByUrl('organization');
  }

  next() {
    // this.healthService.updateHealth(this.form.value);
    this.router.navigateByUrl('visa');
  }
}
