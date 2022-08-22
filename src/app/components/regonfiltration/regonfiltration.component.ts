import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-regonfiltration',
  templateUrl: './regonfiltration.component.html',
  styleUrls: ['./regonfiltration.component.css']
})
export class RegonfiltrationComponent implements OnInit {
  @Output() region : EventEmitter <string>= new EventEmitter();
// totalprice:any;

selectedRegion:string=""
  constructor() { }
  onChange(e:string){
    let region =e
    console.log(region)
    this.selectedRegion=region
    console.log(this.selectedRegion)
    this.region.emit(this.selectedRegion)
  }
  ngOnInit() {
  }

}
