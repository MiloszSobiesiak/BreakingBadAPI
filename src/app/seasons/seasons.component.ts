import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../main/services/http.service';
import { episodes } from '../models/episodes';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css']
})
export class SeasonsComponent implements OnInit {


  episodes: Observable<episodes[]>;
  seasons: string = "1";
  series: string = "Breaking Bad";
  constructor(private http: HttpService) { }

  ngOnInit(): void {

    this.episodes = this.http.getEpisodes();
  }

click(number: string , series: string){
  this.seasons = number;
  this.series = series;
}

}
