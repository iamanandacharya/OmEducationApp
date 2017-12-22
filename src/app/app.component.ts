import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {LoginPage} from '../pages/login/login';
import{OtpPage} from '../pages/otp/otp';
import {MenuPage} from '../pages/menu/menu';
import {SubmenuPage} from '../pages/submenu/submenu'
import {MapPage} from '../pages/map/map'

import { CourseContentPage } from '../pages/course-content/course-content';

import { CourcePage } from '../pages/cource/cource';
import {SignupPage} from '../pages/signup/signup'
import {ProfilePage} from '../pages/profile/profile'
import {DashboardPage} from '../pages/dashboard/dashboard'

import { AboutusPage } from '../pages/aboutus/aboutus';
import { LoginWithEmailPage } from '../pages/login-with-email/login-with-email';

import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';

import { NativeStorage } from '@ionic-native/native-storage';
import { ContactusPage } from '../pages/contactus/contactus';

import { CoursecategoryPage } from '../pages/coursecategory/coursecategory';

import { RestApiUrlCallProvider } from '../providers/rest-api-url-call/rest-api-url-call';
 
import {HTTP, HTTPResponse} from '@ionic-native/http'
import { Header } from 'ionic-angular/components/toolbar/toolbar-header';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  public isLoggedIn:any;
  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public restApi:RestApiUrlCallProvider,public platform: Platform,public nativeStorage:NativeStorage,public google:GooglePlus,public facebook:Facebook, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Dashboard', component: HomePage },

      {title:'Course' , component:CourcePage},
      { title: 'Fourm', component: ListPage },
      { title: 'Account', component: ListPage },      
      { title: 'About-Us', component: HomePage },
      {title:'Contact-Us' , component:LoginPage},
      { title: 'Help & support', component: HomePage },
      {title:'Logout' , component:LoginPage},
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      let env = this;
      let navCtrl = this.nav
      
      this.google.trySilentLogin({
        'scopes':'',
        'webClientId':'',
        'offline':true
      }).then(function(user){
        env.nativeStorage.getItem('user')
        .then(function(data){
          console.log(data)
          console.log(user)
          env.nav.setRoot(DashboardPage);
      })

     
      },function(error){
        env.nav.push(LoginPage)
      }
    )
    })
    .catch(err =>console.log(err))
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
  logout(){
    this.facebook.logout()
    
    .then(res => this.isLoggedIn = false)
    this.nav.push(LoginPage)
    .catch( e => console.log('error from Logout',e))
  }
  logoutByGoogle(){
    let navCtrl = this.nav
    let env = this;
    this.google.logout()
    .then(function(res){
        env.nativeStorage.remove('user');
        navCtrl.push(LoginPage)
    },
    function(error){
        console.log(error);
    }
)}
profilePage(){
  this.nav.push(ProfilePage)
}
courcePage(){
  this.nav.push(CoursecategoryPage)
}
aboutUsClick(){
  this.nav.push(AboutusPage)
}
contactUsPage(){
  this.nav.push(ContactusPage)
}
logoutByEmail(){
this.restApi.logout().then((result)=>{
  this.nativeStorage.clear();
  console.log(result)
  this.nav.push(LoginPage)
},(err)=>{
  console.log(err)
})
}
listPage(){
  this.nav.push(ListPage);
}
}
