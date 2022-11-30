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

  fragrances: Fragrance[] = [];


  constructor(
    private cart: FragranceCartService,
    private data: FragranceDataService) {


  }

  ngOnInit(): void {
    this.data.getAll()
      .subscribe(fragrances => this.fragrances = fragrances);
  }

  addToCart(fragrance: any): void {

    this.cart.addToCart(fragrance);
    fragrance.stock -= fragrance.quantity;
    fragrance.quantity = 0;

  }







}
