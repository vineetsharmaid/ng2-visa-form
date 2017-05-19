import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MyDatePickerModule } from 'mydatepicker';
import { Md2Module }  from 'md2';
import { LoadersCssModule } from 'angular2-loaders-css';
// import { StoreModule } from '@ngrx/store';


import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { FormsComponent } from './forms/forms.component';
import { DataService } from './forms/data.service';
import { EmploymentVisaComponent } from './forms/employment-visa/employment-visa.component';
import { TemporaryVisaComponent } from './forms/temporary-visa/temporary-visa.component';
import { PartnerVisaComponent } from './forms/partner-visa/partner-visa.component';
import { FamilyVisaComponent } from './forms/family-visa/family-visa.component';
import { MaidVisaComponent } from './forms/maid-visa/maid-visa.component';
import { VisaComponent } from './forms/visa/visa.component';
import {ImageCropperComponent, CropperSettings, Bounds} from 'ng2-img-cropper';
import {TooltipModule} from "ngx-tooltip";
import 'hammerjs';

import { Ng2MultiStepFormRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    FormsComponent,
    EmploymentVisaComponent,
    TemporaryVisaComponent,
    PartnerVisaComponent,
    FamilyVisaComponent,
    MaidVisaComponent,
    VisaComponent,
    ImageCropperComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    Ng2MultiStepFormRoutingModule,
    BrowserAnimationsModule,
    MyDatePickerModule,
    Md2Module.forRoot(),
    LoadersCssModule,
    TooltipModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
