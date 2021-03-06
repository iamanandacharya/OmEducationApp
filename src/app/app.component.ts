import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,AlertController } from 'ionic-angular';
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

//ionic push notification add plugin
import {Push,PushObject,PushOptions} from "@ionic-native/push"

//add one signal plugin

import {OneSignal} from '@ionic-native/onesignal';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  public isLoggedIn:any;
  rootPage: any = 'LoginPage';

  pages: Array<{title: string, component: any}>;

  constructor(public restApi:RestApiUrlCallProvider,
    public platform: Platform,
    public nativeStorage:NativeStorage,
    public google:GooglePlus,
    public facebook:Facebook, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public push:Push,
    public alertController:AlertController,
    public onesignal:OneSignal
  ) {
//    this.initializeApp();
this.platform.ready().then(() =>{
  this.statusBar.styleDefault();
  this.splashScreen.hide();
  

  let env = this;
  let navCtrl = this.nav
  let oneSignalId = 'a5ce2de2-4dd8-4f06-b62d-92cad7932d97'
  let fcmAppId = '456110808227'
  
//one signal push application
this.onesignal.startInit(oneSignalId, fcmAppId)
this.onesignal.inFocusDisplaying(this.onesignal.OSInFocusDisplayOption.Notification);
this.onesignal.setSubscription(true);
this.onesignal.handleNotificationReceived().subscribe(()=>{
  // your code after Notification received.
  
});
this.onesignal.handleNotificationOpened().subscribe(() => {
//you can handle when notification open
this.nav.push(HomePage)
});
this.onesignal.endInit();


  //for google silent login
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

  this.initPushNotification();
})
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

  // initializeApp() {
  //   this.platform.ready().then(() => {
  //     // Okay, so the platform is ready and our plugins are available.
  //     // Here you can do any higher level native things you might need.
      
  //   })
   
  //   .catch(err =>console.log(err))
  // }

  //ionic push notification method
  initPushNotification(){
    
    const options: PushOptions = {
      android: {
        senderID: '456110808227'
      },
    }
    const pushobject:PushObject = this.push.init(options)
    pushobject.on('registeration').subscribe((data:any) => {
      console.log('device token' + data.registerationId)
    })
    pushobject.on('notification').subscribe((data:any) => {
      console.log("message" + data.message);
     //if user using app and push notification comes
    //Whether the notification was received while the app was in the foreground
    if(data.additionalData.foreground) {
      //poup alert
      let confirmAlert =  this.alertController.create({
        title : "Notification",
        message : data.message,
        buttons : [{
          text:  'Ignore',
          role: 'teacher'
        },{
          text  : 'view',
          handler: ()=>{
            this.nav.push(HomePage,{message:data.message})
            console.log('push notification click')
          }
        }]
      })
    }else {
      //if user NOT using app and push notification comes
      //TODO: Your logic on click of push notification directly
      this.nav.push(LoginPage, { message: data.message });
      console.log('Push notification clicked');
    }
    })
    pushobject.on('error').subscribe(error => {
      console.log('error  with push' + error);
    })
   
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
  localStorage.clear();
  console.log(result)
  this.nav.push(LoginPage)
},(err)=>{
  console.log(err)
})

this.nav.push(LoginPage)
}
listPage(){
  this.nav.push(ListPage);
}
}
