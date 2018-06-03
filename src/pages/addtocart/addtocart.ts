import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ByeNowPage } from '../bye-now/bye-now';

/**
 * Generated class for the AddtocartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

let buttonClickNumber:number =0;
@IonicPage()
@Component({
  selector: 'page-addtocart',
  templateUrl: 'addtocart.html',
})
export class AddtocartPage {
  public currentPrice:number=20;
  public total_price:number;
  public boxId;
  public boxXlick:boolean =true


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.total_price = 50+ this.total_price;
   
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddtocartPage');
  }
  paymnetMethod(){
    this.navCtrl.push('ByeNowPage')
  }


  //provide variable with public access modifier
  public buttonClickNumber:number = 0;
  public buttonClick:boolean=false;
  public buttonInc:number =1;
  public buttonId:any;

  addClick(event){
    //display button when user click button
    this.buttonClick = true;
    
    //increment value with +1 when click event fire
    let increment = this.buttonClickNumber++;
    console.log(event)

    //get the value of button
     this.buttonId = document.getElementById('buttonId');

     //create button dynamicaly
    let button1 = document.createElement('button');
    //provide id to newly created button
    button1.id="ButtonOne";
    console.log(button1);
    //append new button to previous button
    this.buttonId.appendChild(button1);
    
    
  }
 
}
// window.onload=() =>{
//   var incr = 0;
//   var increment = this.incr++
//   var buttonClick = document.getElementById('buttonId');
//   console.log(buttonClick)
//   //create button

//   var button1 = document.createElement('button');
//   button1.innerText = this.increment;
//   button1.id="ButtonOne";
//   console.log(button1);
//   buttonClick.appendChild(button1);
  
// }
