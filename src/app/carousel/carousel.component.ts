import {Component, OnInit} from '@angular/core';
import {NgbCarouselConfig, NgbSlideEvent} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  changeDirection: string;

  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);
  slides = [

    {
      img: '/assets/img/slider/IMG_0837-146_CROP.jpg',
      text: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam.' +
        ' Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies ' +
        'vehicula ut id elit.'
    },
    {
      img: '/assets/img/slider/IMG_0415-6_CROP.jpg',
      text: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam.' +
        ' Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies ' +
        'vehicula ut id elit.'
    }];

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;


  }

  ngOnInit() {

  }


}
