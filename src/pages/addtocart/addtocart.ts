import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ByeNowPage } from '../bye-now/bye-now';

/**
 * Generated class for the AddtocartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addtocart',
  templateUrl: 'addtocart.html',
})
export class AddtocartPage {
  public currentPrice:number=20;
  public total_price:number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.total_price = 50+ this.total_price;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddtocartPage');
  }
  paymnetMethod(){
    this.navCtrl.push(ByeNowPage)
  }
}
