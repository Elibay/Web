import { Component, OnInit } from '@angular/core';
import { Statics } from 'src/app/static/Statics';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Statics.onInit();
    const today = document.getElementById('cinema');
    today.classList.add('active');
  }
}
