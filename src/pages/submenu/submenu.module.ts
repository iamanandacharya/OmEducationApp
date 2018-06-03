import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubmenuPage } from './submenu';

@NgModule({
  declarations: [
    SubmenuPage,
  ],
  imports: [
    IonicPageModule.forChild(SubmenuPage),
  ],
  exports:[
    SubmenuPage,
  ],
  entryComponents:[
    SubmenuPage
  ]
})
export class SubmenuPageModule {}
