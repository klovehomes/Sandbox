
import { Http } from '@angular/http';
import { Component, OnInit,Input } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { MatSidenavContainer,MatSidenav,MatButton,
  MatCheckbox,MatFormField,MatRadioGroup } from '@angular/material';


@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent implements OnInit {
  answerDisplay: boolean;
  showSpinner: boolean = false;
  @Input() showForm: boolean ;
  @Input() ClientId: number;
  @Input() LastName: any;
  @Input() Firstname: any;
  @Input() Phone: any;
  @Input() Insurance: string;
  @Input() Address: any;
  @Input() LastVisit: Date;
  @Input() remarks: string;
  @Input() email: string;
 
  constructor() { }

  ngOnInit() {
    this.showSpinner = false;
    this.ClientId = 192949493  ;
  
      console.log('Info Array be >> ' + (this.ClientId));

}
showAnswer(){
  this.showSpinner = true;
  setTimeout(() => {this.answerDisplay = true ;
    this.showSpinner = false; },2000);
    this.answerDisplay = true;
    console.log('Show ANSWER DOne. >> ' + JSON.stringify(this.ClientId));
  } 

  showNewClientForm(){
   this.showForm = !this.showForm;
    console.log('Show  new client Form now') ;
  }
}