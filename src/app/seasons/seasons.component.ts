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
  number:number=1;
  series: string = "Breaking Bad";
  poster:string = "/assets/season1.webp"
  constructor(private http: HttpService) { }

  ngOnInit(): void {

    this.episodes = this.http.getEpisodes();
  }

click(number: string , series: string){
  this.seasons = number;
  this.series = series;

}
clickadd(number:number){
  this.number=this.number+number;
  if(this.number <=0){
    this.number=9;
  }
  else if (this.number>9){
    this.number=1;
  }

  if(this.number==1){
    this.seasons = "1"
    this.series = "Breaking Bad";
    this.poster = "/assets/season1.webp"
  }
  else if(this.number==2){
    this.seasons = "2"
    this.series = "Breaking Bad";
    this.poster = "/assets/season2.webp"
  }
  else if(this.number==3){
    this.seasons = "3"
    this.series = "Breaking Bad";
    this.poster = "/assets/season 3.webp"
    
  }
  else if(this.number==4){
    this.seasons = "4"
    this.series = "Breaking Bad";
    this.poster = "/assets/season 4.webp"
  }
  else if(this.number==5){
    this.seasons = "5"
    this.series = "Breaking Bad";
    this.poster = "/assets/season 5.webp"
  }
  else if(this.number==6){
    this.seasons = "1"
    this.series = "Better Call Saul";
    this.poster = "/assets/call1.webp"
    
  }
  else if(this.number==7){
    this.seasons = "2"
    this.series = "Better Call Saul";
    this.poster = "/assets/call2.webp"
  }
  else if(this.number==8){
    this.seasons = "3"
    this.series = "Better Call Saul";
    this.poster = "/assets/call3.jpg"
    
  }
  else if(this.number==9){
    this.seasons = "4"
    this.series = "Better Call Saul";
    this.poster = "/assets/call4.webp"
  }
}

}
