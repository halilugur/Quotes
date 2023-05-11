import { ActivatedRoute } from '@angular/router';
import { Quote } from './../model/Quote';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: 'detail.page.html',
  styleUrls: ['detail.page.scss'],
})
export class DetailPage {
  imageUrl: string | undefined;
  quote: Quote | undefined;
  comments: any[] = [];
  comment: string | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(({ quote, imageUrl }) => {
      console.log(JSON.parse(quote));
      console.log(imageUrl);
      this.quote = JSON.parse(quote);
      this.imageUrl = imageUrl;
    });
    console.log(this.comments)
  }

  get backgroundStyle() {
    return `url('${this.imageUrl}')`;
  }

  addComment() {
    this.comments?.push(this.comment);
    this.comment = '';
    if (this.comments.length > 5) {
      this.comments.reverse().pop();
    }
  }
}
