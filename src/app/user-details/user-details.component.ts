import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  public data;
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  allUser(){
           alert("in allUser method")
           let url="https://backendchetan.herokuapp.com/getAll";
           this.http.post(url,{})
           .subscribe((res)=>{
                    console.log(res["data"])
                    this.data=JSON.stringify(res["data"]);
           }),(err)=>{
             console.log(err["err"]);
           }
  }
}
