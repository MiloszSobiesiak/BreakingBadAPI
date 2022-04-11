import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterCoverComponent } from './character-cover/character-cover.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CharacterViewComponent } from './character-view/character-view.component';
import { SeasonsComponent } from './seasons/seasons.component';
import { QuizComponent } from './quiz/quiz.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    CharactersComponent,
    CharacterCoverComponent,
    CharacterViewComponent,
    SeasonsComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
