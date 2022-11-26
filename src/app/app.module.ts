import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FragranceListComponent } from './fragrance-list/fragrance-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FragranceListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
