import { Injectable } from '@angular/core';

import { cars} from "../../data/data.cars";

import { car } from "../../model/model.car";

@Injectable()
export class CarModelProvider {

  carList:car[]=[];
  constructor() {
    this.carList = cars;
  }

  getCarList(){
    return this.carList;
  }


  searchCars(searchFiles:any):car[]{
    let searchCarList:car[] = this.carList;
    if(searchFiles.model!=null){
      searchCarList = this.searchByModel(searchFiles.model,searchCarList);
    }
    if(searchFiles.priceMore!=null){
      searchCarList = this.searchByPriceMoreThan(searchFiles.priceMore,searchCarList);
    }
    if(searchFiles.priceLess!=null){
      searchCarList = this.searchByPriceLessThan(searchFiles.priceLess,searchCarList);
    }
    if(searchFiles.color!=null){
      searchCarList = this.searchByColor(searchFiles.color,searchCarList);
    }
    return searchCarList;
  }

  searchByModel(model:string,list:car[]):car[]{
    return list.filter((car)=>{
      return car.model.toLowerCase().indexOf(model.toLowerCase()) > -1;
    });
  }

  searchByColor(color:string,list:car[]):car[]{
    return list.filter((car)=>{
      return car.color.toLowerCase().indexOf(color.toLowerCase()) > -1;
    });
  }

  searchByPriceMoreThan(price:number,list:car[]):car[]{
    return list.filter((car)=>{
      return car.price >= price;
    });
  }
  
  searchByPriceLessThan(price:number,list:car[]):car[]{
    return list.filter((car)=>{
      return car.price <= price;
    });
  }


}
