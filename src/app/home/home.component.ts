import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	public employees=[];
	public datas=[];
  constructor(  private http: HttpClient ) { }

  ngOnInit(){
}
click()
{
	
  let obs = this.http.get('https:api.github.com/users/'+this.username);
  obs.subscribe((response)=>{
  this.response = response;
  console.log(this.response)});
  
}
}
