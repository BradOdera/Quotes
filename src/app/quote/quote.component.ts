import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'Ludwig Van Bethoven', 'Music is like a dream. One that I cannot hear.', 'Brad', 0, 0, new Date(2019, 9, 28)),
    new Quote(2, 'Bob Marley', 'One good thing about music, when it hits you, you feel no pain.', 'Brad', 0, 0, new Date(2019, 9, 28)),

  ];


  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm('Are you sure you want to delete this quote?')

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote);
  }

  ngOnInit() {
  }

}