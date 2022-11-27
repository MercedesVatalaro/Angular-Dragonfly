import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Fragrance } from '../fragrance-list/fragrance';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.css']
})
export class InputIntegerComponent implements OnInit {

  constructor() {
        
   }

  @Input()
  quantity!: number;

  @Input()
  max!: number;

  @Output()
  quantityChange: EventEmitter<number>= new EventEmitter<number>();

  

  ngOnInit(): void {
    
  }
  
  upQuantity(): void{
    if(this.quantity < this.max){
    this.quantity++;
    this.quantityChange.emit(this.quantity);
    }
  }
  downQuantity(): void{
  if(this.quantity > 0)
    this.quantity--;
    this.quantityChange.emit(this.quantity);
  
  }
  onChangeQuantity(event: { key: any; }): void{
  console.log(event.key)
  this.quantityChange.emit(this.quantity);
  }

}
