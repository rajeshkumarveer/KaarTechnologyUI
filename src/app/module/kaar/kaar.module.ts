import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KaarRoutingModule } from './kaar-routing.module';
import { KaarComponent } from './kaar.component';
import { AchievementComponent } from './components/achievement/achievement.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { KaarServicesComponent } from './components/kaar-services/kaar-services.component';
import { TeamsComponent } from './components/teams/teams.component';


@NgModule({
  declarations: [
    KaarComponent,
    AchievementComponent,
    ContactsComponent,
    FooterComponent,
    HeaderComponent,
    KaarServicesComponent,
    TeamsComponent
  ],
  imports: [
    CommonModule,
    KaarRoutingModule
  ]
})
export class KaarModule { }
