import { Component, OnInit } from '@angular/core';
import { Quote } from "../quote";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

   title='Favorite Quotes'
   
  quotes = []
  // [new Quote(1, 'John Wooden', 'Things turn out best for the people who make the best of the way things turn out.',  new Date(2019,5,3)),]

  // Adding a new quote to the list.
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength +1;
    quote.entryDate = new Date
    (quote.entryDate)
    this.quotes.push(quote)
  }

  //Adding and hiding quotes details
  toggleDetails(index){
  this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  //Deleting a quote
  deleteQuote(isBoring, index){
    if(isBoring){
      let toDelete = confirm(`Do you like this quote? ${this.quotes[index].description}`);
    if (toDelete){
      this.quotes.splice(index,1);
    }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
