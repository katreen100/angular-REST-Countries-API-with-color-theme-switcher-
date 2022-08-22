import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyServiceService } from 'src/app/my-service.service';

@Component({
  selector: 'app-countrydetails',
  templateUrl: './countrydetails.component.html',
  styleUrls: ['./countrydetails.component.css']
})
export class CountrydetailsComponent implements OnInit {
countryname:string=""
countryDetails: any ={} 
mood:string | null =localStorage.getItem("mood")
 
  constructor(private service: MyServiceService, 
    private activateRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    let getparams=this.activateRoute.paramMap.subscribe((param:any)=>{
      console.log(param)
      let name=param.get('name')
      this.countryname=name
    this.service.GetcountriesDetails(this.countryname).subscribe((country:any )=>{
      console.log(country)
      this.countryDetails=country[0]
      console.log(this.countryDetails)
    })

 
  })
 
}

}

