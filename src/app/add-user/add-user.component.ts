import { Component, OnInit } from '@angular/core';
import {HttpClient  } from "@angular/common/http";
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  public id;
  public email;
  public password;
  public city;

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
   addUser(){
     alert("in addUser");
     let url="http://localhost:5000/addUser"
         this.http.post(url,{"email":this.email,"id":this.id,"password":this.password,"city":this.city})
         .subscribe((res)=>{
                 alert(res["sms"]);
                 console.log(res["sms"])
         }),(err)=>{
           console.log("error"+err)
         }
   }
}
