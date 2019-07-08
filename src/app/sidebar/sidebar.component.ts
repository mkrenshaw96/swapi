import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private http: HttpClientModule) { }

  ngOnInit() {
  }

}
