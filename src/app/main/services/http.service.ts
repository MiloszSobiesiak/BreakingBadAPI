
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { character } from 'src/app/models/character';
import { tap } from 'rxjs';
import { episodes } from 'src/app/models/episodes';
import { quote } from 'src/app/models/quote';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

private url= 'https://www.breakingbadapi.com/api/'

getCharacters(): Observable<character[]>{
    return this.httpClient.get<character[]>(this.url + 'characters')
}

getCharacter(id:any): Observable<character[]>{
    return this.httpClient.get<character>(this.url + 'characters/' + id).
    pipe(tap(console.log))
}

getEpisodes(): Observable<episodes[]>{
  return this.httpClient.get<episodes[]>(this.url + 'episodes')
}

getRandom(): Observable<quote[]>{
  return this.httpClient.get<quote[]>(this.url + 'quote/random')
}



}