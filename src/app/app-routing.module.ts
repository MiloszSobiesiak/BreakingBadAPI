import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from '@angular/router';
import { CharacterViewComponent } from "./character-view/character-view.component";
import { CharactersComponent } from "./characters/characters.component";
import { MainComponent } from "./main/main.component";
import { QuizComponent } from "./quiz/quiz.component";
import { SeasonsComponent } from "./seasons/seasons.component";


const routes: Routes = [
    {path: 'main',component:MainComponent},
    {path:'characters', component:CharactersComponent},
    {path:'characters/:id', component:CharacterViewComponent},
    {path: 'seasons',component:SeasonsComponent},
    {path: 'quiz',component:QuizComponent},
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: '**', component:MainComponent }
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
exports:[RouterModule],
  })
  export class AppRoutingModule { }