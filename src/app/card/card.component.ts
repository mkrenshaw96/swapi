import { Component, OnInit } from '@angular/core';
import { ApiData } from '../apidata.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  response;
  type;

  constructor(private ApiData: ApiData, private http: HttpClient) { }

  ngOnInit() {
    this.ApiData.cast.subscribe(type => this.type = type)
    this.ApiData.cast2.subscribe(response => this.response = response)
    this.http.get(`https:swapi.co/api/people/?search=luke`)
      .subscribe(
        (data: any) => {
          this.response = data.results
          this.type = 'people'
        }
      )
  }
}
