import { Component, OnInit } from '@angular/core';
import {Statics} from '../../static/Statics';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Statics.onInit();
    const index = document.getElementById('index');
    index.classList.add('active');
  }

}
