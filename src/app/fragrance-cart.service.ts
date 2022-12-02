import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Fragrance } from './fragrance-list/fragrance';

@Injectable({
  providedIn: 'root'
})
export class FragranceCartService {
  /*deleteToCart(fragrance: any) {
    throw new Error('Method not implemented.');
  }*/


  private _cartList: Fragrance[] = [];
  cartList: BehaviorSubject<Fragrance[]> = new BehaviorSubject(this._cartList);

  constructor() { }

  addToCart(fragrance: Fragrance) {

    let index = this._cartList.findIndex((v1) => v1.name == fragrance.name);
    if (index === -1) {
      this._cartList.push({ ...fragrance });

    } else {
      //index.quantity += fragrance.quantity;
      this._cartList[index].quantity= fragrance.quantity;
    }
    //console.log(this._cartList);
    this.cartList.next(this._cartList);
    if(fragrance.quantity==0)
    this._cartList.splice(index, 1);

  }

  deleteToCart(){

    this._cartList.splice(0, this._cartList.length);
    console.log("adentro")
  }

}
