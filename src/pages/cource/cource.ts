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

  public like_count:number = 5;
  public rate :number =  4;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CourcePage');
  }
  clickCount(){
    this.like_count++;
  }
  goToCourse(){
this.navCtrl.push(CourseContentPage)
  }
  onModelChange($event){
    this.navCtrl.push(CourseContentPage)
  }
}
