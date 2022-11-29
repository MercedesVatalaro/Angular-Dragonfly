import { Component, OnInit } from '@angular/core';
import { FragranceCartService } from '../fragrance-cart.service';
import { FragranceDataService } from '../fragrance-data.service';
import { Fragrance } from './fragrance';

@Component({
  selector: 'app-fragrance-list',
  templateUrl: './fragrance-list.component.html',
  styleUrls: ['./fragrance-list.component.css']
})
export class FragranceListComponent implements OnInit {

fragrances: Fragrance []= [];
/*[{
name: "Flower",
brand: "Kenso",
size : 50,
price : 11000,
image: "assets/img/flower.png",
stock: 15,
clearance: true,
quantity:0,
},
{
  name: "NR",
  brand: "Nina Ricci",
  size : 30,
  price : 18000,
  image: "assets/img/nina.png",
  stock: 10,
  clearance: false,
  quantity:0,
  },
  {
    name: "Carolina Herrera",
    brand: "CH",
    size : 100,
    price : 19000,
    image: "assets/img/ch.png",
    stock:0,
    clearance: false,
    quantity:0,
    },
];*/
  



  constructor(
    private cart: FragranceCartService,
    private data: FragranceDataService) { 
    
    
  }

    ngOnInit(): void {
      this.data.getAll()
      .subscribe(fragrances => this.fragrances = fragrances);
  }

  addToCart(fragrance: any): void{
    
    this.cart.addToCart(fragrance);
    fragrance.stock-= fragrance.quantity;
    fragrance.quantity=0;

  }


}
