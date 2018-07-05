import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, LoadingController } from 'ionic-angular';

// Model
import { car} from "../../model/model.car";

// Services
import { CarModelProvider } from "../../providers/car-model/car-model"

//pages
import { CarComparationPage } from "../car-comparation/car-comparation"
import { CarPopoverPage } from '../car-popover/car-popover'

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
              private popOverCtrl :PopoverController,
              private loadCtrl:LoadingController,
              private  _carsModel: CarModelProvider) {

    this.cars = this._carsModel.getCarList();

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

  showOptions(myEvent){
    let popover = this.popOverCtrl.create(CarPopoverPage);
    popover.present({
      ev: myEvent
    });

    popover.onDidDismiss(result=>{
      

      if(result){
        let loading = this.loadCtrl.create({
          content: "Wait a moment..."
        });

        loading.present();

        this.unCheckAll();
        this.carsChecked = [];
        
        this.cars = result;

        loading.dismiss();
      }
      
    });
  }
}
