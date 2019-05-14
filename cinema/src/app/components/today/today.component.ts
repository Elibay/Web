import { Component, OnInit } from '@angular/core';
import {Statics} from '../../static/Statics';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Statics.onInit();
    const today = document.getElementById('today');
    today.classList.add('active');
  }

}
