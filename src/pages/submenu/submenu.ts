import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MenuPage} from '../menu/menu'
/**
 * Generated class for the SubmenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-submenu',
  templateUrl: 'submenu.html',
})
export class SubmenuPage {

  // when clicked it will be true
  public butoonClicked: boolean= false;
  public closeButtonClicked = true;
  public currentNumber:any = 0;
  public food:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.food = "pizza"
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubmenuPage');
  }
  open_arrow_button(){
    this.butoonClicked = true; 
  }
  closeMenu(){
    this.butoonClicked = false; 
  }
  //increment method when user click + button
  public increment(){
    this.currentNumber++;
  }
  public decrement(){
    this.currentNumber--;
  }
  

}
