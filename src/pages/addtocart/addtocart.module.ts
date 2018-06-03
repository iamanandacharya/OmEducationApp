import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddtocartPage } from './addtocart';

@NgModule({
  declarations: [
    AddtocartPage,
  ],
  imports: [
    IonicPageModule.forChild(AddtocartPage),
  ],
  exports:[
    AddtocartPage,
  ],
  entryComponents:[
    AddtocartPage
  ]
})
export class AddtocartPageModule {}
