import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReviewPageFormPage } from './review-page-form';

import { Ionic2RatingModule } from 'ionic2-rating';
@NgModule({
  declarations: [
    ReviewPageFormPage,
  ],
  imports: [
    IonicPageModule.forChild(ReviewPageFormPage),
  ],
  exports:[
    Ionic2RatingModule
  ],

})
export class ReviewPageFormPageModule {}
