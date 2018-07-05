import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';

//Model
import { colors } from '../../data/data.colors'

// Services
import { CarModelProvider } from "../../providers/car-model/car-model"

@IonicPage()
@Component({
  selector: 'page-car-popover',
  templateUrl: 'car-popover.html',
})
export class CarPopoverPage {

  optionColors:string[]=colors;

  private todo : FormGroup;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private viewCtrl :ViewController,
              private formBuilder: FormBuilder,
              private  _carsModel: CarModelProvider) {
    this.todo = this.formBuilder.group({
       model:[""],
       priceMore: [],
       priceLess: [],
       color: [""],
     });

  }

  searchCars(){
    let searchForm = this.todo.value;
    let searchCarsList = (this._carsModel.searchCars(searchForm));
    this.viewCtrl.dismiss(searchCarsList);
  }

  allCars(){
    this.viewCtrl.dismiss(this._carsModel.getCarList());
  }
}
