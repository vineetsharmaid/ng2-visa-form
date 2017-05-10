import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-health',
  templateUrl: './personal.html',
  styleUrls: ['./personal.css']
})
export class PersonalComponent implements OnInit {
  form: FormGroup;

  constructor(
    // private healthService: HealthService,
    private fb: FormBuilder,
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
    this.router.navigateByUrl('user');
  }

  next() {
    // this.healthService.updateHealth(this.form.value);
    this.router.navigateByUrl('summary');
  }
}
