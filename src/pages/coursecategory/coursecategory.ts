import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CourseContentPage } from '../course-content/course-content';

import { CourcePage } from '../cource/cource';

/**
 * Generated class for the CoursecategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coursecategory',
  templateUrl: 'coursecategory.html',
})
export class CoursecategoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoursecategoryPage');
  }
  itCourceList(){
    this.navCtrl.push(CourcePage)
  }
}
