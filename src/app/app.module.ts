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
import { Teams2Component } from './teams2/teams2.component';
import { MiniheadderComponent } from './body/miniheadder/miniheadder.component';
import { ChannelHeaderComponent } from './teams/channel-header/channel-header.component';
import { ChatDetailComponent } from './teams/chat-detail/chat-detail.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    SiddenavComponent,
    TeamsComponent,
    SubnavComponent,
    Teams2Component,
    MiniheadderComponent,
    ChannelHeaderComponent,
    ChatDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    ClarityModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
