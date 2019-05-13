import {Routes} from '@angular/router';
import {MainComponent} from '../components/main/main.component';
import {CinemaComponent} from '../components/cinema/cinema.component';
import {TodayComponent} from '../components/today/today.component';
import {SoonComponent} from '../components/soon/soon.component';

export const mainRoutes: Routes = [
  {path: 'index', component: MainComponent, data: {name: 'Главная'}},
  {path: 'cinema', component: CinemaComponent, data: {name: 'Cinema'}},
  {path: 'today', component: TodayComponent, data: {name: 'Сегодня детям'}},
  {path: 'soon', component: SoonComponent, data: {name: 'Скоро'}},
  {path: 'schedule', component: SoonComponent, data: {name: 'Расписание'}},
];
