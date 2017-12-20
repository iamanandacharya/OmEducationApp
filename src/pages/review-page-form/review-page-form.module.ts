import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReviewPageFormPage } from './review-page-form';

@NgModule({
  declarations: [
    ReviewPageFormPage,
  ],
  imports: [
    IonicPageModule.forChild(ReviewPageFormPage),
  ],
})
export class ReviewPageFormPageModule {}
