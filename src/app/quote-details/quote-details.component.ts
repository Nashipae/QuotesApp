import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from "../quote";

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

    @Input() quote:Quote;
  @Output() isBoring = new EventEmitter<boolean>();

  quoteDelete(complete: boolean) {
    this.isBoring.emit(complete);
  }

  // quoteLike(like:boolean){
  //   this.isBoring.emit(boring);
  // }

  submitUpvote(quote) {
  quote.upvote = this.quote.upVote + 1;
}

submitDownvote(quote) {
  this.quote.downVote = this.quote.downVote + 1;
}
  constructor() { }

  ngOnInit() {
  }

}
