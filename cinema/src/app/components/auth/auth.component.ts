import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private provider: AuthService) { }

  public user = '';
  public pass = '';

  ngOnInit() {
    const token = localStorage.getItem('token');
    

  }

  login() {
    if (this.user !== '' && this.pass !== '') {
      this.provider.auth(this.user, this.pass).then(res => {
        localStorage.setItem('token', res.token);
        
      });
    }
  }

  register() {
    
  }
}
