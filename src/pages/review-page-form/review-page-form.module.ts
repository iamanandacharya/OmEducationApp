import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReviewPageFormPage } from './review-page-form';

import { Ionic2RatingModule } from 'ionic2-rating';
import { Ionic2Rating } from 'ionic2-rating/dist/ionic2-rating';
@NgModule({
  declarations: [
    ReviewPageFormPage,
  ],
  imports: [
    IonicPageModule.forChild(ReviewPageFormPage),
    Ionic2RatingModule
  ],
  exports:[
    Ionic2RatingModule,
    ReviewPageFormPage,
  ],
  entryComponents:[
    ReviewPageFormPage
  ]

})
export class ReviewPageFormPageModule {}
