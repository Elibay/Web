import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { RouterModule, Routes } from '@angular/router';
import { DescriptionComponent } from './description/description.component';

const appRoutes: Routes = [
  { path: '', component: UiModule },
  { path: 'description', component: DescriptionComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
