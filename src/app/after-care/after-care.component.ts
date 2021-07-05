import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-after-care',
  templateUrl: './after-care.component.html',
  styleUrls: ['./after-care.component.scss']
})
export class AfterCareComponent implements OnInit {

  constructor(
    private meta: Meta,
    private title: Title
  ) { }

  ngOnInit() {
    this.setMeta();
  }

  public setMeta() {
    this.title.setTitle('Twinkle Kidz | After-care');
    this.meta.addTags([
      {
        name: 'description',
        content: 'Delicious home cooked meals including afternoon snacks. After-care'
      },
      {
        name: 'keywords',
        content:
          'Aftercare,holiday care,baby sitting service',
      },
      {name: 'author', content: 'Michael Boonekamp'},
      {property: 'og:title', content: 'Twinkle Kidz | After-care'},
      {
        property: 'og:description',
        content:
          'Young children will have an afternoon nap. This is not compulsory for older children.' +
          'Delicious home cooked meals including afternoon snacks.',
      },
      {
        property: 'og:image',
        content: 'https://twinklekidzpreschool.co.za/after-care',
      },
      {
        property: 'og:url',
        content: 'https://twinklekidzpreschool.co.za/after-care',
      },
      {property: 'og:phone_number', content: '+27 (21) 975 3581'},
      {
        property: 'og:street-address',
        content: '31 Tara Road, Durbanville, Cape Town',
      },
      {property: 'og:email', content: 'adrienne@twinklekidzpreschool.co.za'},
      {name: 'twitter:card', content: 'summary'},
      {name: 'twitter:title', content: 'Twinkle Kidz  | After-care'},
      {
        name: 'twitter:description',
        content:
          'Young children will have an afternoon nap. This is not compulsory for older children.' +
          'Delicious home cooked meals including afternoon snacks.',
      },
    ]);
  }
}
