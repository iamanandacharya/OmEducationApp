import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OtpPage } from './otp';

@NgModule({
  declarations: [
    OtpPage,
  ],
  imports: [
    IonicPageModule.forChild(OtpPage),
  ],
  exports:[
    OtpPage
  ],
  entryComponents:[
    OtpPage
  ]

})
export class OtpPageModule {
  
}
