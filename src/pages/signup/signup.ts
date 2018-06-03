import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {ProfilePage} from '../profile/profile'
import {OtpPage} from '../otp/otp'

import { RestApiUrlCallProvider } from '../../providers/rest-api-url-call/rest-api-url-call';
import {FormGroup,FormControl,Validators, FormBuilder} from '@angular/forms'
import {DashboardPage} from '../dashboard/dashboard'
import {HTTP, HTTPResponse} from '@ionic-native/http'
import { Header } from 'ionic-angular/components/toolbar/toolbar-header';


/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
   userData = {
    'userid' : "",
    'firstname' : "",
    'lastname' : "",
    'email' : "",
    'password' : ""
  }
  responseData:any;
  signupBox:any;

 
  constructor(public http:HTTP, public formBuilder:FormBuilder,public navCtrl: NavController,public restApiUrlCallProvider:RestApiUrlCallProvider ,public navParams: NavParams) {
  this.signupBox = this.formBuilder.group({
    userid : ['',Validators.required],
    firstname : ['',Validators.required],
    lastname : ['',Validators.required],
    email : ['',Validators.required],
    password : ['',Validators.required]
  })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
   
  register(){
    // let userData = {
    //   'userid' : this.signupBox.controls.userid.value,
    //   'firstname' : this.signupBox.controls.firstname.value,
    //   'lastname' : this.signupBox.controls.lastname.value,
    //   'email' : this.signupBox.controls.email.value,
    //   'password' : this.signupBox.controls.password.value
    // }
    let headers = new Headers();
    //fetch value from form
  //   this.http.post("http://192.168.43.206:8080/Elearn/rest/user/signup",userData,headers).then((res:HTTPResponse) =>{
  //     this.responseData = res;
  //     console.log(res);
  //     localStorage.setItem('mobileData',JSON.stringify(this.responseData));
  //     this.navCtrl.setRoot(DashboardPage);
  // },(err) =>{
  //     console.log(err);
  // })
    //http post data 
    // this.restApiUrlCallProvider.register(this.userData,'register').then((result) => {
    //   this.responseData = result;
    //   if(this.responseData.userData){
    //     console.log(this.responseData);
    //     localStorage.setItem('userData',JSON.stringify(this.responseData));
    //     this.navCtrl.push(ProfilePage);        
    //   }
    //   else {
    //     console.log('user already exist');
    //   }
    // },(err) => {
    //   console.log(err);
    // })

  //   this.restApiUrlCallProvider.login(this.loginData).then((result)=>{
  //     this.data = result;
  //     if(this.responseData.loginData){
  //         console.log(this.responseData);
  //         localStorage.setItem('loginData',JSON.stringify(this.responseData));
  //         this.navCtrl.setRoot(DashboardPage);
  //     }
  //     else{

  //     }
  // })


  this.restApiUrlCallProvider.register(this.userData).then((result)=>{
    this.responseData = result;
    if(this.responseData.userData){
      console.log(this.responseData)
      localStorage.setItem('userData',JSON.stringify(this.responseData));
      this.navCtrl.pop()
    }
    else{
      console.log(Error)
    }
  })

  }

}
