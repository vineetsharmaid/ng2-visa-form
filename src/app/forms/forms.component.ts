import { Component, ViewContainerRef } from '@angular/core';
import { MdDialogConfig, MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent{
	 tabLinks = [
    {label: 'Organization Details', link: 'organization'},
    {label: 'Personal Details', link: 'personal'},    
    {label: 'Visa Details', link: 'visa'},
  ];

  activeLinkIndex = 0; 
}
