import { Component, Input, OnInit } from '@angular/core';
import { character } from '../models/character';

@Component({
  selector: 'app-character-cover',
  templateUrl: './character-cover.component.html',
  styleUrls: ['./character-cover.component.css']
})
export class CharacterCoverComponent {


  @Input() character: character;

}
