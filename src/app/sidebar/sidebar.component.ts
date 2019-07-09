import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiData } from '../apidata.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
  searchTerm: string="";

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSearchTermChange(event: any) {
    console.log (event.target.value)
    this.searchTerm = event.target.value;
  }
  
  onSearch(event: any, placeholder) {
    event.preventDefault();
    let url = `https://swapi.co/api/${placeholder}/?search=${this.searchTerm}`
    console.log(url)
    this.http.get(url)
    .subscribe(
      (data:any) => {
        const service = new ApiData();
        service.logApiData(data);
          console.log(data)
      }
    )
  }
}
