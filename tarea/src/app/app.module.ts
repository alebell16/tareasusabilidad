import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CaratulaComponent } from './caratula/caratula.component';
import { FooterComponent } from './footer/footer.component';
import { PrimeraComponent } from './primera/primera.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CaratulaComponent,
    FooterComponent,
    PrimeraComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
