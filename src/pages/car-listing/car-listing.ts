import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { cars} from "../../data/data.cars";


import { CarModelProvider } from "../../providers/car-model/car-model"

@IonicPage()
@Component({
  selector: 'page-car-listing',
  templateUrl: 'car-listing.html',
})
export class CarListingPage {

  cars:cars[] = [];
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public  _carsModel: CarModelProvider) {

    this.cars = this._carsModel.carList;
    console.log(this.cars);

  }

}
