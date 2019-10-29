import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  quote = 'Music quotes'
  quotes: string[];



  constructor() {
    this.quotes = ['Music is like a dream. One that I cannot hear.', 'Music gives a soul to the universe, wings to the mind, flight to the imagination and life to everything.', 'One good thing about music, when it hits you, you feel no pain.']
  }
}