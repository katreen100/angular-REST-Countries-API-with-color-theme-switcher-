import { MassageserviceService } from './../service/massageservice.service';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';

@Component({
  selector: 'app-allcountries',
  templateUrl: './allcountries.component.html',
  styleUrls: ['./allcountries.component.css'],
})
export class AllcountriesComponent implements OnInit {
  countries: any[] = [];
  mood: any ;
  lightmood:boolean | undefined
  

  constructor(private service: MyServiceService ,private msgservic:MassageserviceService) {
    this.mood=localStorage.getItem("mood")||null
    this.msgservic.currentmood.subscribe((res)=>{
      if(res=="light"||res==null){
        this.mood===res
        this.lightmood=true
        console.log(res)
      }
      else{
        this.mood==res
        this.lightmood=false
        console.log(res)
      }
    })
  }

  ngOnInit() {
    this.service.GetAllCuntries().subscribe((res) => {
      console.log(res);
      this.countries = res;
    });
  }
  onregionchange(region: string) {
    if (region === 'all') {
      this.service.GetAllCuntries().subscribe((res) => {
        console.log(res);
        this.countries = res;
      });
    } else {
      this.service.GetcountriesbyRegion(region).subscribe((res) => {
        console.log(res);
        this.countries = res;
      });
    }
  }
}
