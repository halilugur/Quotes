import { ActivatedRoute } from '@angular/router';
import { Quote } from './../model/Quote';
import { Component } from '@angular/core';

@Component({
  selector: 'app-photomode',
  templateUrl: 'photomode.page.html',
  styleUrls: ['photomode.page.scss'],
})
export class PhotomodePage {
  imageUrl: string | undefined;
  quote: Quote | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(({ quote, imageUrl }) => {
      this.quote = JSON.parse(quote);
      this.imageUrl = imageUrl;
    });
  }

  get backgroundStyle() {
    return `url('${this.imageUrl}')`;
  }
}
