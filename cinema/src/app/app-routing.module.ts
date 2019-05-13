import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {CinemaComponent} from './components/cinema/cinema.component';
import {TodayComponent} from './components/today/today.component';
import {SoonComponent} from './components/soon/soon.component';
import {ScheduleComponent} from './components/schedule/schedule.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'today', component: TodayComponent, data: {name: 'Сегодня детям'}},
  {path: 'soon', component: SoonComponent, data: {name: 'Скоро'}},
  {path: 'schedule', component: ScheduleComponent, data: {name: 'Расписание'}},
  {path: 'cinema', component: CinemaComponent, data: {name: 'Cinema'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
