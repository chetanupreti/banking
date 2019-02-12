import { Component, OnInit } from '@angular/core';
import {HttpClient  } from "@angular/common/http";
@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {
public id;

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  delete(){
    alert("in delete method");
    let url="https://backendchetan.herokuapp.com/delete";
    this.http.post(url,{"id":this.id})
    .subscribe((res)=>{
       alert(JSON.stringify(res["msg"]));
    }),
    (err)=>{
          console.log(err["err"]);
    }
  }
}
