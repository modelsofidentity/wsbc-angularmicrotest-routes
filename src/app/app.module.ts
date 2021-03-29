import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserModule,
  
 RouterModule.forRoot([
    {path: 'crisis-list', component: CrisisListComponent},  //here the path tagname and the component class
    {path: 'heroes-list', component: HeroesListComponent}, //here we set the path for this thing
    {path: '', redirectTo: '/heroes-list', pathMatch: 'full'}  //this creates the home page kind of

    
  ]), ],


  declarations: [ AppComponent, HelloComponent, CrisisListComponent, HeroesListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
