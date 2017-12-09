import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CourseOverviewPage } from '../course-overview/course-overview';
/**
 * Generated class for the StudentCourseListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student-course-list',
  templateUrl: 'student-course-list.html',
})
export class StudentCourseListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentCourseListPage');
  }
  goToCourse(){
    this.navCtrl.push(CourseOverviewPage)
  }
}
