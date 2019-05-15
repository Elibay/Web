import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { TodayComponent } from './components/today/today.component';
import { SoonComponent } from './components/soon/soon.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { CinemaComponent } from './components/cinema/cinema.component';
import { MovieComponent } from './components/movie/movie.component';
import { MainComponent } from './components/main/main.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './AuthInterceptor';
import { AuthComponent } from './components/auth/auth.component';
import { FormsModule } from '@angular/forms';
import {ClassProvider} from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    TodayComponent,
    SoonComponent,
    ScheduleComponent,
    CinemaComponent,
    MovieComponent,
    MainComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [
    <ClassProvider> {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
