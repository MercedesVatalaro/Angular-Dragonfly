import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dragonfly-contact',
  templateUrl: './dragonfly-contact.component.html',
  styleUrls: ['./dragonfly-contact.component.css']
})
export class DragonflyContactComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {

    console.log("Los datos se enviaron exitosamente");
  }
}