import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RestApiUrlCallProvider } from '../../providers/rest-api-url-call/rest-api-url-call';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  data:any;
  constructor(public restApiUrlCallProvider:RestApiUrlCallProvider, public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
  post:any;
  ionViewDidLoad(){
//fetch data from server.
//use subscribe for

    this.restApiUrlCallProvider.getData()
    .subscribe(data=>{
      this.post = data.data.children; 
      console.log( this.post )},
      err => {
        console.log(err);
      });
    
  }

  
}
