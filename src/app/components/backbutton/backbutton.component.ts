import { Component, OnInit } from '@angular/core';
import { MassageserviceService } from './../service/massageservice.service';

@Component({
  selector: 'app-backbutton',
  templateUrl: './backbutton.component.html',
  styleUrls: ['./backbutton.component.css']
})
export class BackbuttonComponent implements OnInit {
  mood:any;
  lightmood:boolean | undefined
  constructor( private msgservic:MassageserviceService) { 
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
  }
  backButton(){
    console.log("f")
    window.history.back();
  }
}
