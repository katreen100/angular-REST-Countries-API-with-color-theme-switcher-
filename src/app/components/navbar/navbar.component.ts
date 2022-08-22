import { MassageserviceService } from './../service/massageservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 lightmood:boolean|undefined
  constructor(private msgservive:MassageserviceService) { }

  ngOnInit() {
  }
  changemood(){
    let mood=localStorage.getItem("mood")
    if(mood===null){
      localStorage.setItem("mood","dark")
      this.msgservive.changemood("dark")
      document.body.style.color="hsl(200, 15%, 8%)"
      this.lightmood=true;

    }
    else if (mood === "light") {
      localStorage.setItem("mood","dark")
      this.msgservive.changemood("dark")
      document.body.style.backgroundColor="hsl(207, 26%, 17%)"
      // document.body.style.color="hsl(200, 15%, 8%)"
      document.body.style.color=" hsl(0, 0%, 100%)"
      this.lightmood=true
    
    } else {
      localStorage.setItem("mood","light")
      this.msgservive.changemood("light")
      document.body.style.backgroundColor="#8080800a"
      // document.body.style.color=" hsl(0, 0%, 100%)"
      document.body.style.color="hsl(200, 15%, 8%)"
      this.lightmood=false
    }
  }
  }


