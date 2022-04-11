import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { quote } from '../models/quote';
import { HttpService } from '../main/services/http.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  constructor(private http: HttpService) {}

  quotes: Observable<quote[]>;
  text:string = ''
  ngOnInit(): void {
    this.quotes = this.http.getRandom();
  }

  click(quote:string){
    let letters = quote.split('')
    if(this.text.length===0){
      this.text = letters[0]
    }
    else{
      this.text += letters[this.text.length]
      let guess = this.text.split('');
      for(let i = 0; i < guess.length ; i++){
        if(guess[i]===letters[i]){
        }
        else{
          this.text=letters[i]
          break
        }
      }
  }

  }
  czek(quote:string){
     if(quote.toLocaleLowerCase()===this.text.toLocaleLowerCase()){
       this.text=""
       this.quotes = this.http.getRandom();
     }
  }
  
}
