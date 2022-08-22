import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  mood:string | null =localStorage.getItem("mood")
  
  ngOnInit(): void {
    if (this.mood==="light"||this.mood==null){
      document.body.style.background="hsl(0, 0%, 98%)"
      document.body.style.color="hsl(200, 15%, 8%)"
    }
    else{
      document.body.style.background="hsl(207, 26%, 17%)"
      document.body.style.color=" hsl(0, 0%, 100%)"
    }
  }
  title = 'countries';
 
}
