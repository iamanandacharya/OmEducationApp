import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';

import { RestApiUrlCallProvider } from '../../providers/rest-api-url-call/rest-api-url-call';
import {FormGroup,FormControl,Validators, FormBuilder} from '@angular/forms'
import { DashboardPage } from '../dashboard/dashboard';

/**
 * Generated class for the LoginWithEmailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-with-email',
  templateUrl: 'login-with-email.html',
})
export class LoginWithEmailPage {



  constructor(public restApiUrlCallProvider:RestApiUrlCallProvider,public formBuilder:FormBuilder,public navCtrl: NavController,public menuCtrl:MenuController, public navParams: NavParams) {
    this.menuCtrl.enable(false)
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginWithEmailPage');
  }
}
