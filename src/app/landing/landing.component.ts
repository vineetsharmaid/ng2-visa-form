import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  title = 'Landing Page';

  constructor( private router: Router ){}

  redirect(redirectLink) {
    this.router.navigateByUrl(redirectLink);
  }
}
