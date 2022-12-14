import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-dragonfly-contact',
  templateUrl: './dragonfly-contact.component.html',
  styleUrls: ['./dragonfly-contact.component.css']
})
export class DragonflyContactComponent implements OnInit {
 // FragranceCartService: any;
 contactForm = new FormGroup({
  firstName: new FormControl(''),
  lastName: new FormControl(''),
  email: new FormControl(''),
  message: new FormControl('')
});


  constructor() { }

  ngOnInit(): void {

      }

  onResetForm(): void{

    this.contactForm.reset();

  }    
  onSubmit() {

    console.warn( "El formulario se envio correctamente" ,this.contactForm.value);
    this.onResetForm();
  }


}
