import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountrydetailsComponent } from './components/countrydetails/countrydetails.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:"",component: HomeComponent},
  {path:"countrydetails/:name", component : CountrydetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
