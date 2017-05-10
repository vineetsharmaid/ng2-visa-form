import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import { StoreModule } from '@ngrx/store';


import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { OrganizationComponent } from './forms/organization/organization.component';
import { PersonalComponent } from './forms/personal/personal.component';
import 'hammerjs';

import { Ng2MultiStepFormRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    OrganizationComponent,
    PersonalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    Ng2MultiStepFormRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
