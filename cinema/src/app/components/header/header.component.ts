import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/services/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private provider: AuthService) { }

  logged = false;

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }
    else {
      this.logged = false;
    }
  }

  logout() {
    this.provider.logout().then(res => {
      this.logged = false;
      localStorage.clear();
    });
  }
}
