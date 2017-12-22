import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the HttpGenerateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpGenerateProvider {

  constructor(public http: Http) {
    console.log('Hello HttpGenerateProvider Provider');
  }

}
