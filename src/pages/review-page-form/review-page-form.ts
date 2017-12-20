import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//ionic 2 ratting module
import { Ionic2RatingModule } from 'ionic2-rating';
import{FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
/**
 * Generated class for the ReviewPageFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-review-page-form',
  templateUrl: 'review-page-form.html',
})
export class ReviewPageFormPage {

  public rate:any = 3.5;
  public reviewbox : any;
  public review_text_area:string;

  constructor(public navCtrl: NavController,public formBuilder:FormBuilder, public navParams: NavParams) {
  this.reviewbox = this.formBuilder.group({
    review_text_area:['',Validators.required]
  })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewPageFormPage');
  }
  onModelChange($event){
    this.rate
  }
  messageSend(){
    this.review_text_area = this.reviewbox.controls.review_text_area.value;
  }
}
