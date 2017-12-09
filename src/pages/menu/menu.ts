import { Component,ViewChild } from '@angular/core';
import { IonicPage,Nav,Platform, NavController, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Slides} from 'ionic-angular';

import {HomePage} from '../home/home';
import{LoginPage} from '../login/login';
import{ListPage} from'../list/list';
import {SubmenuPage} from '../submenu/submenu'

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
 
  @ViewChild(Slides) slides:Slides;

  LoginPage;
  page: Array<{title:string,component:any}>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    
    this.page = [
      { title: 'HomeMenu', component: HomePage },
      { title: 'ListMenu', component: ListPage },
      {title:'Logout' , component:LoginPage}
    ];
    this.LoginPage=LoginPage;
  }
  slideChanged(){
    this.slides.slideNext(110000,true);
    this.slides.startAutoplay();
   
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
  goBack(){
    this.navCtrl.pop();
  }


  openPizzaMenu(){
    this.navCtrl.push(SubmenuPage);
  }

}
