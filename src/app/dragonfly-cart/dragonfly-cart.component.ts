import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FragranceCartService } from '../fragrance-cart.service';
import { Fragrance } from '../fragrance-list/fragrance';

@Component({
  selector: 'app-dragonfly-cart',
  templateUrl: './dragonfly-cart.component.html',
  styleUrls: ['./dragonfly-cart.component.css']
})
export class DragonflyCartComponent implements OnInit {

  cartList$: Observable<Fragrance[]>;

  constructor(private cart: FragranceCartService) { 
    
    this.cartList$=  cart.cartList.asObservable();
   
  }

  ngOnInit(): void {
  }

}