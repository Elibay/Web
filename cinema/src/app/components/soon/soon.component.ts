import { Component, OnInit } from '@angular/core';
import {Statics} from '../../static/Statics';

@Component({
  selector: 'app-soon',
  templateUrl: './soon.component.html',
  styleUrls: ['./soon.component.css']
})
export class SoonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Statics.onInit();
    const soon = document.getElementById('soon');
    soon.classList.add('active');
  }

}
