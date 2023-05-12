import { ActivatedRoute, Router } from '@angular/router';
import { Quote } from './../model/Quote';
import { Component } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: 'detail.page.html',
  styleUrls: ['detail.page.scss'],
})
export class DetailPage {
  // Image url for background
  imageUrl!: string;
  // A detail of :Quote
  quote!: Quote;
  // User comments
  comments: any[] = [];
  // input comment from user
  comment!: string;

  /**
   * Prepare services for using.
   * 
   * @param route getting parameters
   * @param router navigate to the other pages
   */
  constructor(private route: ActivatedRoute, private router: Router) {}

  /**
   * Prepare Quote and Image url for showing in detail page.
   */
  ngOnInit() {
    this.route.queryParams.subscribe(({ quote, imageUrl }) => {
      this.quote = JSON.parse(quote);
      this.imageUrl = imageUrl;
    });
  }

  /**
   * Set background for specific quote
   */
  get backgroundStyle() {
    return `url('${this.imageUrl}')`;
  }

  /**
   * Each person can leave comment bottom of the quote.
   */
  addComment() {
    this.comments?.push(this.comment);
    this.comment = '';
    if (this.comments.length > 5) {
      this.comments.reverse().pop();
    }
  }

  /**
   * Send quote and image url to the Photo Mode page.
   * 
   * @param quote a quote
   * @param imageUrl an image url
   */
  goToPhotomode(quote: Quote, imageUrl: string) {
    let data = JSON.stringify(quote);
    this.router.navigate(['/photomode'], {
      queryParams: { quote: data, imageUrl },
    });
  }
}
