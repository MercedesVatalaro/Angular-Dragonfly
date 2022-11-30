import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Fragrance } from './fragrance-list/fragrance';

@Injectable({
  providedIn: 'root'
})
export class FragranceCartService {
  deleteToCart(fragrance: any) {
    throw new Error('Method not implemented.');
  }


  private _cartList: Fragrance[] = [];
  cartList: BehaviorSubject<Fragrance[]> = new BehaviorSubject(this._cartList);

  constructor() { }

  addToCart(fragrance: Fragrance) {

    let item: Fragrance | undefined = this._cartList.find((v1) => v1.name == fragrance.name);
    if (!item) {
      this._cartList.push({ ...fragrance });

    } else {
      item.quantity += fragrance.quantity;
    }
    console.log(this._cartList);
    this.cartList.next(this._cartList);
  }


}
