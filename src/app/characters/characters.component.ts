import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../main/services/http.service';
import { character } from '../models/character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

characters: Observable<character[]>;
text: ''

  constructor(private http:HttpService) { }

  ngOnInit(): void {
    this.characters = this.http.getCharacters();
  }

}
