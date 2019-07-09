import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiData } from '../apidata.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
  searchTerm: string = "";
  results: any;
  constructor(private http: HttpClient, private ApiData: ApiData) { }

  ngOnInit() {
  }

  onSearchTermChange(event: any) {
    this.searchTerm = event.target.value;
  }



  onSearch(event: any, placeholder) {
    event.preventDefault();
    let url = `https://swapi.co/api/${placeholder}/?search=${this.searchTerm}`
    this.ApiData.setType(placeholder)
    this.http.get(url)
      .subscribe(
        (data: any) => {
          const service = new ApiData();
          service.logApiData(data);
          console.log(data);
          this.ApiData.setResponse(data.results)

        }, err => console.log(err)
      )
  }
}
