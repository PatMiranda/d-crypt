import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MessagesComponent } from './messages/messages.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { RegisterComponent } from './register/register.component';
import { SolveComponent } from './solve/solve.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainMenuComponent,
    MessagesComponent,
    ChallengeComponent,
    LeaderboardComponent,
    RegisterComponent,
    SolveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
