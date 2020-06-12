import { Contact } from './contact.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  title = 'contact';
  // tslint:disable-next-line:new-parens
  Contact = {
    name : '',
    email: '',
    subject: '',
    message: ''
  } ;

  submitted = false;

  onSubmit(){
    this.submitted = true;
    console.log('cotact ===========>', this.Contact);
  }
  getCurrentContact() {
    return JSON.stringify(this.Contact);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
