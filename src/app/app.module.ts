import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserModule,
  
 RouterModule.forRoot([
    {path: 'crisis-list', component: CrisisListComponent},
    {path: 'heroes-list', component: HeroesListComponent}, //here we set the path for this thing
    {path: '', redirectTo: '/heroes-list', pathMatch: 'full'},  //this creates the home page kind of
    {path: '**', component: PageNotFoundComponent}
    
  ]), ],


  declarations: [ AppComponent, HelloComponent, CrisisListComponent, HeroesListComponent, PageNotFoundComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
