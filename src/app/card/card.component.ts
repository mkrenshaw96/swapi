import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  people: boolean = false;
  ships: boolean = false;
  films: boolean = false;
  person: '';
  ship: '';
  film: '';
  response: '';
  selected;

  constructor(private http: HttpClient) { }

  // this.response ? this.people = true : null
  // this.response ? this.ships = true : null
  // this.response ? this.films = true : null

  // if(response) {
  //   this.people = true;
  // }
  // if(response) {
  //   this.ships = true;
  // }
  // if(response) {
  //   this.films = true;
  // }

  ngOnInit() {
    let peopleUrl = `https://swapi.co/api/people/?search=luke`
    this.http.get(peopleUrl)
      .subscribe(
        (data: any) => {
          this.person = data.results[0]
        })

    // let vehicleUrl = `https://swapi.co/api/vehicles/?search=sand`
    // this.http.get(vehicleUrl)
    //   .subscribe(
    //     (data: any) => {
    //       this.ship = data.results[0]
    //     }
    //   )

    // let filmUrl = `https://swapi.co/api/films/?search=revenge`
    // this.http.get(filmUrl)
    //   .subscribe(
    //     (data: any) => {
    //       this.film = data.results[0]
    //     }
    //   )
  }
  clicked() {
    console.log(this.selected)
  }
}
