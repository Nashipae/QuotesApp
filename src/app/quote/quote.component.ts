import { Component, OnInit } from '@angular/core';
import { Quote } from "../quote";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes =[]

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
  this.quotes[index].showDesription = !this.quotes[index].showDesription;
  }

  //Deleting a quote
  deleteQuote(isBoring, index){
    if(isBoring){
      let toDelete = confirm(`Do you like this quote? ${this.quotes[index].name}`);
    if (toDelete){
      this.quotes.splice(index,1);
    }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
