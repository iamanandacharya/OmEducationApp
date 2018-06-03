import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddVisaCardDetailsPage } from './add-visa-card-details';

@NgModule({
  declarations: [
    AddVisaCardDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddVisaCardDetailsPage),
  ],
  exports:[
    AddVisaCardDetailsPage,
  ],
  entryComponents:[
    AddVisaCardDetailsPage
  ]

})
export class AddVisaCardDetailsPageModule {}
