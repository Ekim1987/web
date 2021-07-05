import {Component, OnInit} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {style} from '@angular/animations';
import {NgwWowService} from 'ngx-wow';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  teams = [
    {
      img: 'assets/img/slider/Compressed/IMG_0689-101-min.jpg',
      title: 'Alexandra',
      position: 'Teacher Manager'
    },
    {
      img: 'assets/img/slider/Compressed/IMG_0697-104-min.jpg',
      title: 'Adrienne',
      position: 'Principal'
    },
    {
      img: 'assets/img/slider/Compressed/IMG_0689-101-min.jpg',
      title: 'Shimmy',
      position: 'Teacher'
    },
    {
      img: 'assets/img/slider/Compressed/IMG_0715-110-min.jpg',
      title: 'Nicole',
      position: 'Teacher'
    },
    {
      img: 'assets/img/slider/Compressed/IMG_0725-112-min.jpg',
      title: 'Jasmin',
      position: 'Teacher'
    },
  ]
  ;
  carouselOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: true,
    dots: false,
    margin: 10,
    stagePadding: 20,
    lazyLoad: true,
    navSpeed: 5000,
    navText: ['', ''],
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    }, nav: false
  };

  constructor(private wowService: NgwWowService) {
  }

  ngOnInit() {
    this.wowService.init();
  }
}
