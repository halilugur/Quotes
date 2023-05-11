import { Quote } from './../model/Quote';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  private readonly API_URL = 'https://api.quotable.io/quotes/random';
  constructor() {}

  async getRandomQuote(): Promise<Quote[]> {
    let quotes: Quote[] = [];
    await axios.get(this.API_URL).then((response) => (quotes = response.data));
    return quotes;
  }
}
