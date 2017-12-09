import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { EmailComposer } from '@ionic-native/email-composer';
import { Subject } from 'rxjs/Subject';
//import form builder
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
/**
 * Generated class for the ContactusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contactus',
  templateUrl: 'contactus.html',
})
export class ContactusPage {

  public contactbox:any;
  constructor(public navCtrl: NavController,public fromBuilder:FormBuilder,public emailComposer:EmailComposer, public navParams: NavParams) {
  //formBuilders is used to provide specific control to form controllers and apply different validators on them
  //FromBuilder is instance of formGroup,which we call as a form
    this.contactbox = this.fromBuilder.group({
    //validating all elements
    first_name:['',Validators.required],
    last_name:['',Validators.required],
    email : ['',Validators.required],
    phone : ['',Validators.required],
    text_area: ['',Validators.required]
  })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactusPage');
  }
  messageSend(){
    //sent email 
    let email = {
      to:'jatin@microsoft1.publicvm.com',
      subject:'Inquiry',
      body:'Type your Message',
      isHtml:true
      };
      this.emailComposer.open(email);

  }
}
