import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CourseContentPage } from '../course-content/course-content';
import { Http,Response,Headers } from '@angular/http';
/**
 * Generated class for the CourcePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let apiUrl = 'http://localhost:8080/Elearn/rest/course/editCourse/1'
@IonicPage()
@Component({
  selector: 'page-cource',
  templateUrl: 'cource.html',
})
export class CourcePage {

  public like_count:number = 5;
  public rate :number =  4;
  users:any;

  constructor(public navCtrl: NavController,public http:Http, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CourcePage');

    this.http.get(apiUrl)
    .subscribe(data => {
      this.users = data.json();
      console.log(this.users);
    })

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
