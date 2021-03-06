import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { MusicQuotesComponent } from './music-quotes/music-quotes.component';
import { HighlightDirective } from './highlight.directive';
import { DateCountPipe } from './date-count.pipe';

import { QuoteFormComponent } from './quote-form/quote-form.component';
import { UpvoteButtonComponent } from './upvote-button/upvote-button.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    MusicQuotesComponent,
    HighlightDirective,
    DateCountPipe,
    QuoteFormComponent,
    UpvoteButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }