import { Quote } from './../model/Quote';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
/**
 * This class call an api that it provides random quote.
 */
export class QuoteService {
  private readonly API_URL = 'https://api.quotable.io/quotes/random';
  constructor() {}

  /**
   * get a random quote from api
   * 
   * @returns a random quote
   */
  async getRandomQuote(): Promise<Quote[]> {
    let quotes: Quote[] = [];
    await axios.get(this.API_URL).then((response) => (quotes = response.data));
    return quotes;
  }
}
