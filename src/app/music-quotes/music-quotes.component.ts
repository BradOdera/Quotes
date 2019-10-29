import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-music-quotes',
  templateUrl: './music-quotes.component.html',
  styleUrls: ['./music-quotes.component.css']
})
export class MusicQuotesComponent implements OnInit {

  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();
  quotes: any;

  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }

  completeQuote(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }
  constructor() { }

  ngOnInit() {
  }

}