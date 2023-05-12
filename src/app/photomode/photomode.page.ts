import { ActivatedRoute } from '@angular/router';
import { Quote } from './../model/Quote';
import { Component } from '@angular/core';

@Component({
  selector: 'app-photomode',
  templateUrl: 'photomode.page.html',
  styleUrls: ['photomode.page.scss'],
})
export class PhotomodePage {
  // image url for background
  imageUrl: string | undefined;
  // A detail of quote
  quote: Quote | undefined;

  constructor(private route: ActivatedRoute) {}

  /**
   * Prepare data and image url for this page.
   */
  ngOnInit() {
    this.route.queryParams.subscribe(({ quote, imageUrl }) => {
      this.quote = JSON.parse(quote);
      this.imageUrl = imageUrl;
    });
  }

  /**
   * Set background for photo mode
   */
  get backgroundStyle() {
    return `url('${this.imageUrl}')`;
  }
}
