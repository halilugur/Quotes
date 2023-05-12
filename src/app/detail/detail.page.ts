import { ActivatedRoute, Router } from '@angular/router';
import { Quote } from './../model/Quote';
import { Component } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: 'detail.page.html',
  styleUrls: ['detail.page.scss'],
})
export class DetailPage {
  imageUrl!: string;
  quote!: Quote;
  comments: any[] = [];
  comment!: string;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(({ quote, imageUrl }) => {
      this.quote = JSON.parse(quote);
      this.imageUrl = imageUrl;
    });
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

  goToPhotomode(quote: Quote, imageUrl: string) {
    let data = JSON.stringify(quote);
    this.router.navigate(['/photomode'], {
      queryParams: { quote: data, imageUrl },
    });
  }
}
