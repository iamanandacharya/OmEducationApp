import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CourseContentPage } from '../course-content/course-content';

import { CourcePage } from '../cource/cource';
import {Http,Response,Headers} from '@angular/http'

/**
 * Generated class for the CoursecategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

let url = 'http://localhost:8080/Elearn/rest/category/editCategory/2';
let url2 = 'http://localhost:8080/Elearn/rest/category/editCategory/3'

@Component({
  selector: 'page-coursecategory',
  templateUrl: 'coursecategory.html',
})

export class CoursecategoryPage {

  constructor(public navCtrl: NavController,public http:Http, public navParams: NavParams) {
  }
  users:any;
  users2:any;
  ionViewDidLoad() {
    console.log('ionViewDidLoad CoursecategoryPage');

    this.http.get(url)
    .subscribe( data => {
      this.users = data.json();
      console.log(this.users);
    },(err)=>{
      console.log(err);
    })
    this.http.get(url2)
    .subscribe(data2 => {
      this.users2 = data2.json();
      console.log(this.users2)
    })
    
  }
  itCourceList(){
    this.navCtrl.push('CourcePage')
  }
}
