import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CourcePage } from './cource';
import { Ionic2RatingModule } from 'ionic2-rating/dist/ionic2-rating.module';

@NgModule({
  declarations: [
    CourcePage,
  ],
  imports: [
    IonicPageModule.forChild(CourcePage),
    //we are using lazy module so we have to import Ionic2Rating in particular page 
    //If we are use in main page module then we must import lazy module in app.module.ts
    Ionic2RatingModule
  ],
  exports:[
    CourcePage,
  ],
  entryComponents:[CourcePage]
  
})
export class CourcePageModule {}
