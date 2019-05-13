import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {CinemaComponent} from './components/cinema/cinema.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'cinema', component: CinemaComponent},
  // {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
