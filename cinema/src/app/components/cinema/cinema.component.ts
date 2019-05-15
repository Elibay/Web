import { Component, OnInit } from '@angular/core';
import { Movie, Cinema } from 'src/app/models/models';
import { Statics } from 'src/app/static/Statics';
import { CinemaService } from 'src/app/services/cinema.service';


@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {
  
  constructor(private provider: CinemaService) { }

  public cinemas: Array<Cinema> = []

  ngOnInit() {
    Statics.onInit();
    const soon = document.getElementById('cinema');
    soon.classList.add('active');

    this.getCinemas();
    
  }

  getCinemas() {
    this.provider.getCinemas().then(res => {
      this.cinemas = res;
      console.log('123');
      console.log(this.cinemas);
    });
  }
}
