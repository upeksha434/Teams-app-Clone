import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';
import { Teams2Component } from './teams2/teams2.component';

const routes: Routes = [
  {path: 'teams',component:TeamsComponent},
  {path:'teams2',component:Teams2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
