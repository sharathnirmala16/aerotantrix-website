import { Component } from '@angular/core';
import { Slide } from '../shared/carousel/slide';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  images: Slide[] = [];

  constructor() {
    for (let i = 1; i <= 8; i++) {
      this.images.push({
        url: `/assets/images/home-page/${i}.png`,
        text: `${i}`,
      });
    }
  }
}
