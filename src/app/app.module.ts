import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { IntroStackComponent } from './intro-stack/intro-stack.component';
import { WsbcJumplinksComponent } from './wsbc-jumplinks/wsbc-jumplinks.component';
import { WsbcSubheaderComponent } from './wsbc-subheader/wsbc-subheader.component';
import { WsbcFooterComponent } from './wsbc-footer/wsbc-footer.component';
import { MobileToolbarComponent } from './mobile-toolbar/mobile-toolbar.component';
import { WsbcHeaderComponent } from './wsbc-header/wsbc-header.component';
import { HomeComponent } from './home/home.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { WsbcFormComponent } from './wsbc-form/wsbc-form.component';
import { AccountinfoComponent } from './accountinfo/accountinfo.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserModule,
  
 RouterModule.forRoot([
    {path: 'crisis-list', component: CrisisListComponent},  
    {path: 'heroes-list', component: HeroesListComponent},
    {path: 'form', component: WsbcFormComponent},  
    {path: 'confirmation', component: ConfirmationComponent},  
    {path: 'home', component: HomeComponent}, 
      {path: 'account', component: AccountinfoComponent}, 
    {path: '', redirectTo: '/app-home', pathMatch: 'full'}  
  ]), ],


  declarations: [ AppComponent, HelloComponent, CrisisListComponent, HeroesListComponent, IntroStackComponent, WsbcJumplinksComponent, WsbcSubheaderComponent, WsbcFooterComponent, MobileToolbarComponent, WsbcHeaderComponent, HomeComponent, InstructionsComponent, ConfirmationComponent, WsbcFormComponent, AccountinfoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
