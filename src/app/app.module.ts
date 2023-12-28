import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { ClarityModule } from '@clr/angular';
import { BodyComponent } from './body/body.component';
import { SiddenavComponent } from './siddenav/siddenav.component';
import { TeamsComponent } from './teams/teams.component';
import { SubnavComponent } from './subnav/subnav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    SiddenavComponent,
    TeamsComponent,
    SubnavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    ClarityModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
