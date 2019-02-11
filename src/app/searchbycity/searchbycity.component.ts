import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-searchbycity',
  templateUrl: './searchbycity.component.html',
  styleUrls: ['./searchbycity.component.css']
})
export class SearchbycityComponent implements OnInit {
  public city;
  public data;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  search() {
    alert("in serach meathod")
    let url = "http://localhost:5000/searchbycity";
    this.http.post(url, { "city": this.city })
      .subscribe((res) => {
        alert("searched");
        this.data = JSON.stringify(res["data"]);

      }),
      (err) => {
        console.log(err["err"]);

      }
  }

}
