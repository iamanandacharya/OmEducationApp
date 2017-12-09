import {Component} from '@angular/core';
import {AlertController,App,NavController,MenuController} from 'ionic-angular'
import {HomePage} from '../home/home'
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms'
import {OtpPage} from '../otp/otp'
import {SignupPage} from '../signup/signup'
import {DashboardPage} from '../dashboard/dashboard'

import {ProfilePage} from '../profile/profile'
//import facebook plugin 
import { Facebook } from '@ionic-native/facebook';
//import google plugin
import { GooglePlus } from '@ionic-native/google-plus';

import { CourseOverviewPage } from '../course-overview/course-overview';

import { CourseContentPage } from '../course-content/course-content';
import { LoginWithEmailPage } from '../login-with-email/login-with-email';
//This plugin is created because of the non-persistent property of LocalStorage in the WebView of Android and iOS.
// In iOS stored data from LocalStorage can be removed by the OS, when running out of memory.   
import { NativeStorage } from '@ionic-native/native-storage';

import {HTTP, HTTPResponse} from '@ionic-native/http'
import { Header } from 'ionic-angular/components/toolbar/toolbar-header';
@Component ({
    selector:'login-page',
    templateUrl:'login.html'
})
export class LoginPage{

    public isLoggedIn:boolean=false;
    users:any;
    public numberValue:number;

    public responseData:any;

    constructor(public navCtrl:NavController,public http:HTTP,public menuCtrl:MenuController,public googlePlus:GooglePlus,public nativeStorage:NativeStorage,public facebook:Facebook,public fb: FormBuilder,public alertCtrl:AlertController,public appCtrl:App){
    this.menuCtrl.enable(false)
        facebook.getLoginStatus()
    .then(res=> {
        console.log(res.status);
        if(res.status === 'connect'){
            this.isLoggedIn = true;
        }
        else {
            this.isLoggedIn = false
        }
    })
.catch(e=>console.log(e));
}
    trueCaller($event){
        console.log(event)
        this.navCtrl.setRoot(DashboardPage);
    }
    public loginform = this.fb.group({
        number: ["", Validators.required,
                    Validators.pattern('[0-9]*')],
        
      });
    //validation using by FromGroup,FormController
      //   public loginform = new FormGroup({
    //     number:new FormControl('',[
    //         Validators.required,
    //         Validators.pattern('[0-9]*')
    //     ]) 
    // });   

     showError(msg:string){
         let alert = this.alertCtrl.create({
            title:'Error',
            subTitle:msg,
            buttons:['ok']
         });
         alert.present();
     } 

     //login by email method
      dologinemail(event) {
          if(this.numberValue === 13){
           
            this.showError('Enter Valid Number');
                   }
          else{
            // this.appCtrl.getRootNav().push(HomePage)  
            this.navCtrl.push(LoginWithEmailPage);
         }
         
      }
      browseCource(){
        this.navCtrl.push(HomePage);            
     }
     doSign(){
         this.navCtrl.push(SignupPage);
     }
     dologin(){
         this.navCtrl.setRoot(DashboardPage)
     }


     //login by facebok and facebook profile details
     //if status is coonected then it will aunthenticated otherwise it shows error
     onFacebookLogin(){
         this.facebook.login(['public_profile','user_friends','email']).then(res => {
             if(res.status === "connected"){
                 this.isLoggedIn = true;
                 this.getUserDetail(res.authResponse.userID);
                 
             }
             else{
                 this.isLoggedIn =  false;
             }
         })
.catch(e => console.log('error facebook login',e))   
  }

  //get user data
  getUserDetail(userID){
    this.facebook.api("/"+userID+"/?fields=id,email,name,picture,gender",["public_profile"])
    .then(res => {
        console.log(res);
        this.users = res;
        this.navCtrl.setRoot(DashboardPage);
        
    })
    .catch(e => {
        console.log(e);
    });
  }
 
  //login by google

  onGoogleLogin(){
    
    let env = this;
    let navCtrl = this.navCtrl
//call login methodand store all data in nativestorage
      this.googlePlus.login({
          'scopes':'',
          'webClientId':'',
          'offline':true
      }).then(function (user){
          env.nativeStorage.setItem('user',{
              
            name: user.displayName,
            email: user.email,
            picture: user.imageUrl
          })
          
          .then(function(){
        //     let headers = new Headers();
        //   this.http.post("localhost:8080/user/register",user,headers).then((res:HTTPResponse)=>{
        //       this.responseData = res;
        //       console.log(res);
        //       localStorage.setItem('userData',JSON.stringify(this.responseData));
              console.log(user);
              navCtrl.setRoot(DashboardPage)
            }),  
          function(error){
              console.log(error)
          }
      })
      
      .catch(err => console.log(err))
  }


  profile(){
    this.navCtrl.push(ProfilePage)
  }
    }
   

    
