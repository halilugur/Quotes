import { QuoteService } from './../service/QuoteService';
import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { Quote } from '../model/Quote';
import { ImageService } from '../service/ImageService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private currentQuote: Quote[] = [];
  private currentImage: string = 'https://source.unsplash.com/random/?nature';
  quotes: Quote[] = [];
  images: string[] = ['https://source.unsplash.com/random/?nature'];
  items: string[] = [];
  quoteCounter: number = 0;
  imageCounter: number = 0;
  MAX_SHOW_ITEM_VALUE: number = 2;
  TIME: number = 5000;

  constructor(
    private quoteService: QuoteService,
    private imageService: ImageService,
    private router: Router
  ) {this.getImage()}

  ngOnInit() {
    interval(this.TIME).subscribe(() => {
      this.getImage();
    });
  }

  private async getQuote() {
    this.quoteService.getRandomQuote().then((response) => {
      this.currentQuote = response;
      if (this.quoteCounter > this.MAX_SHOW_ITEM_VALUE) {
        this.quoteCounter = 0;
      }
      this.quotes[this.quoteCounter] = response[0];
      this.quoteCounter++;
    });
  }

  private async getImage() {
    this.imageService.getRandomImage().then((response) => {
      this.currentImage = response;
      if (this.imageCounter > this.MAX_SHOW_ITEM_VALUE) {
        this.imageCounter = 0;
      }
      this.images[this.imageCounter] = response;
      this.imageCounter++;
      this.getQuote();
    });
  }

  get currentlyQuote(): Quote {
    return this.currentQuote[0];
  }

  get backgroundStyle() {
    return `url('${this.currentImage}')`;
  }

  goToDetail(quote: Quote, imageUrl: string) {
    let data = JSON.stringify(quote);
    this.router.navigate(['/detail'], {
      queryParams: { quote: data, imageUrl },
    });
  }
}
