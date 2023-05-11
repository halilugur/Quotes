import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private readonly imageLink = "https://source.unsplash.com/random/?nature";
  private currentImage = this.imageLink;

  constructor() {
    interval(5000).pipe(
      switchMap(() => axios.get<string>(this.imageLink))
    ).subscribe(response => {
      console.log(response)
      this.currentImage = response.request.responseURL;
    });
  }

  get backgroundStyle() {
    return `url('${this.currentImage}')`;
  }
}
