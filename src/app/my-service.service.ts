import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
    providedIn: 'root'
  })
export class MyServiceService {

constructor(private httpclint:HttpClient ) { }
GetAllCuntries():Observable<any>{
    return this.httpclint.get<any>(`${environment.API_URL}/all`);
  }
  GetcountriesDetails(countryName:string):Observable<any>{
    return this.httpclint.get<any>(`${environment.API_URL}/name/${countryName}`);
  }
  GetcountriesbyRegion(region:string):Observable<any>{
    return this.httpclint.get<any>(`${environment.API_URL}/region/${region}`)
  }
}
