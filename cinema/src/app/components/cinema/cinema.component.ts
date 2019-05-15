import { Component, OnInit } from '@angular/core';
import { Movie, Cinema } from 'src/app/models/models';
import { Statics } from 'src/app/static/Statics';


@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {
  
  constructor() { }

  cinemas: Array<Cinema> = []

  ngOnInit() {
    Statics.onInit();
    const soon = document.getElementById('cinema');
    soon.classList.add('active');

    const cin:Cinema = {
      title: "Kinopark",
      poster: "#",
      address: "Balkantay",
      phone: "1231241",
      desciption: "adasda",
    }
  }
}
