import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CourseOverviewPage } from '../course-overview/course-overview';

/**
 * Generated class for the AddVisaCardDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-visa-card-details',
  templateUrl: 'add-visa-card-details.html',
})
export class AddVisaCardDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddVisaCardDetailsPage');
  }
  makePayment(){
    this.navCtrl.push(CourseOverviewPage)
  }
}
