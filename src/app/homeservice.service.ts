import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HomeserviceService {

  constructor(private http: Httpclient) { }
  getData():Obsevable<data{
  return this.http.get<data[]>('https://randomuser.me/api'); 
  }
}


getData(){
  return[{
  {"id"	: 1	,"name"	: "Shagal"	, "age" : 21},
  {"id"	: 2	,"name"	: "Shaga"	, "age" : 21},
  {"id"	: 3	,"name"	: "Shagl"	, "age" : 21},
  {"id"	: 4	,"name"	: "Shaal"	, "age" : 21},
  {"id"	: 5	,"name"	: "Shgal"	, "age" : 21}
  }];
  }