import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AddVisaCardDetailsPage } from '../add-visa-card-details/add-visa-card-details';
/**
 * Generated class for the ByeNowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bye-now',
  templateUrl: 'bye-now.html',
})
export class ByeNowPage {
  public bank:boolean = false;
  public paypal:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ByeNowPage');
  }
  clickOption(){
    this.bank =true;
  }
  selectPayMethod(){
    this.navCtrl.push(AddVisaCardDetailsPage)
  }
 
  clickOption2(){
    this.paypal =true;
  }
}
