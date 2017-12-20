import { Component,ViewChild,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';
import {Slides} from 'ionic-angular';


import {LoginPage} from '../login/login'
import {MenuPage} from '../menu/menu'
import {MapPage} from '../map/map'
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';
import { CourcePage } from '../cource/cource';
import { StudentCourseListPage } from '../student-course-list/student-course-list';
/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  //added
  @ViewChild('map') mapElement:ElementRef;
  @ViewChild(Slides) slides:Slides;

  public location:string;
  public myAddress:string = "hello"
  constructor(public navCtrl: NavController,public menuCtrl:MenuController, public navParams: NavParams) {
    this.location = "homeDelivery";
    this.menuCtrl.enable(true)
  }
  slideChanged(){
    this.slides.slideNext(1100,false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }
  menuClick($event){
    this.navCtrl.push(MenuPage);
  }
  openProfile(){
    this.navCtrl.push(ProfilePage)
  }
  onHome(){
    this.navCtrl.push(DashboardPage)
  }
  openAllCources(){
    this.navCtrl.push(StudentCourseListPage)
  }
}
