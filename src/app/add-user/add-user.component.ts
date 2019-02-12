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
  public name;
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
   addUser(){
     alert("in addUser");
     let url="https://backendchetan.herokuapp.com/addUser"
         this.http.post(url,{"email":this.email,"id":this.id,"name":this.name,"password":this.password,"city":this.city})
         .subscribe((res)=>{
                 alert(res["sms"]);
                 console.log(res["sms"])
         }),(err)=>{
           console.log("error"+err)
         }
   }
}
