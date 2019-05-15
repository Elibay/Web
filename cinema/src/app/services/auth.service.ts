import {EventEmitter, Injectable} from '@angular/core';
import {Main} from './main.service';
import {HttpClient} from '@angular/common/http';
import { IAuthResponse } from '../models/models';
import { Statics } from '../static/Statics';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends Main {


  constructor(http: HttpClient) {
    super(http);
  }

  auth(login: string, password: string): Promise<IAuthResponse> {
    return this.post(Statics.API_URL + 'login/', {
      username: login,
      password: password
    });
  }
  logout(): Promise<any> {
    return this.post(Statics.API_URL + 'logout/', {});
  }
}
