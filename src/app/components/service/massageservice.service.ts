import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class MassageserviceService {
mood = new BehaviorSubject<any>(' ');
currentmood = this.mood.asObservable();

constructor() { }
changemood(mood :string) {
    //let currentlang= localStorage.getItem('currentLang')
     this.mood.next(mood);
   }

}
