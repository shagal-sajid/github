import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  public raww[];
  private url: string = "https://randomuser.me/api"; 
  constructor(private http: HttpClient ) { }
  getData():Observable<raww{
    return this.http.get<raww[]>(this.url);
  }
getdata(){
  return[{
  {"id" : 1 ,"name" : "Shagal"  , "age" : 21},
  {"id" : 2 ,"name" : "Shaga" , "age" : 21},
  {"id" : 3 ,"name" : "Shagl" , "age" : 21},
  {"id" : 4 ,"name" : "Shaal" , "age" : 21},
  {"id" : 5 ,"name" : "Shgal" , "age" : 21}
  }];
  }
}
