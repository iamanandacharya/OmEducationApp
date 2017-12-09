import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CourseContentPage } from '../course-content/course-content';
/**
 * Generated class for the CourcePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cource',
  templateUrl: 'cource.html',
})
export class CourcePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CourcePage');
  }
  goToCourse(){
this.navCtrl.push(CourseContentPage)
  }
}
