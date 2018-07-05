import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { car} from "../../model/model.car";

import { CarModelProvider } from "../../providers/car-model/car-model"

import { CarComparationPage } from "../car-comparation/car-comparation"

@IonicPage()
@Component({
  selector: 'page-car-listing',
  templateUrl: 'car-listing.html',
})
export class CarListingPage {

  listDisabled:boolean=false;
  cars:car[] = [];
  carsChecked:car[]=[];
  limitCheck:number = 3;
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public  _carsModel: CarModelProvider) {

    this.cars = this._carsModel.carList;

  }

  checked(car) {  
    if (car.checked) {
        this.carsChecked.push(car);
    } else {
       this.carsChecked.splice(this.carsChecked.indexOf(car), 1);
    }

    if(this.carsChecked.length>=this.limitCheck){
      this.listDisabled = true;
    }else{
      this.listDisabled=false;
    }
    
  }

  compareSelectedCars(){
    this.navCtrl.push(
      CarComparationPage,
      {
        carList: this.carsChecked
      }
    );
  }

  unCheckAll(){
    this.cars.forEach((car:any)=>{
      car.checked = false;
    })
  }

}
