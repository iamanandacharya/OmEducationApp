import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ByeNowPage } from './bye-now';

@NgModule({
  declarations: [
    ByeNowPage,
  ],
  imports: [
    IonicPageModule.forChild(ByeNowPage),
  ],
  exports:[
    ByeNowPage,
  ],
  entryComponents:[
    ByeNowPage
  ]
})
export class ByeNowPageModule {}
