import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { HttpService } from '../main/services/http.service';
import { character } from '../models/character';
import { ParamMap } from '@angular/router';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.css']
})
export class CharacterViewComponent implements OnInit {

  character: Observable<character[]>;

  constructor(private http: HttpService, private route: ActivatedRoute) { }

  ngOnInit(){
    this.character = this.route.paramMap.pipe(
      switchMap((params:ParamMap) => this.http.getCharacter(params.get('id')))
    )
  }

}
