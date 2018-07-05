import { Injectable } from '@angular/core';

import { cars} from "../../data/data.cars";

import { car } from "../../model/model.car";

@Injectable()
export class CarModelProvider {

  carList:car[]=[];
  constructor() {
    this.carList = cars;
  }

}
