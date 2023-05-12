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
  // Current quote
  private currentQuote: Quote[] = [];
  // Current image url
  private currentImage: string = 'https://source.unsplash.com/random/?nature';
  // List of Quote
  quotes: Quote[] = [];
  // List of images url
  images: string[] = ['https://source.unsplash.com/random/?nature'];
  // Quote counter for max showing in list.
  quoteCounter: number = 0;
  // Image counter for max showing in list.
  imageCounter: number = 0;
  // Max list size for showing
  MAX_SHOW_ITEM_VALUE: number = 2;
  // Number of time constraints
  TIME: number = 5000;

  /**
   * Create constructor for our services.
   */
  constructor(
    private quoteService: QuoteService,
    private imageService: ImageService,
    private router: Router
  ) {
    this.getImage();
  }

  /**
   * Set a timer that each 5 second can change quote and background image.
   */
  ngOnInit() {
    interval(this.TIME).subscribe(() => {
      this.getImage();
    });
  }

  /**
   * Get random Quote from the api.
   */
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

  /**
   * Get random image from the api.
   */
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

  /**
   * Set random quote data for main page
   */
  get currentlyQuote(): Quote {
    return this.currentQuote[0];
  }

  /**
   * Set random image backgroun for main page 
   */
  get backgroundStyle() {
    return `url('${this.currentImage}')`;
  }

  /**
   * When a customer select a quote from the list it will redirect to detail page.
   * 
   * @param quote quote that selected on list
   * @param imageUrl image url
   */
  goToDetail(quote: Quote, imageUrl: string) {
    let data = JSON.stringify(quote);
    this.router.navigate(['/detail'], {
      queryParams: { quote: data, imageUrl },
    });
  }
}
