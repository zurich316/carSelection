import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CarComparationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-car-comparation',
  templateUrl: 'car-comparation.html',
})
export class CarComparationPage {

  carList:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
     this.carList = this.navParams.get('carList');
     
  }

  

}
