import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FragranceListComponent } from './fragrance-list/fragrance-list.component';
import { FormsModule } from '@angular/forms';
import { DragonflyContactComponent } from './dragonfly-contact/dragonfly-contact.component';
import { DragonflyFragrancesComponent } from './dragonfly-fragrances/dragonfly-fragrances.component';
import { DragonflyCartComponent } from './dragonfly-cart/dragonfly-cart.component';

import {AppRoutingModule} from './app-routing.module';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    FragranceListComponent,
    DragonflyContactComponent,
    DragonflyFragrancesComponent,
    DragonflyCartComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
