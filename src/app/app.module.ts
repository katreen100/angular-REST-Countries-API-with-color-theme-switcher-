import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllcountriesComponent } from './components/allcountries/allcountries.component';
import { BackbuttonComponent } from './components/backbutton/backbutton.component';
import { CountrydetailsComponent } from './components/countrydetails/countrydetails.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegonfiltrationComponent } from './components/regonfiltration/regonfiltration.component';

@NgModule({
  declarations: [
    AppComponent,
    AllcountriesComponent,
    HomeComponent,
    CountrydetailsComponent,
    NavbarComponent,
    RegonfiltrationComponent,
    BackbuttonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
