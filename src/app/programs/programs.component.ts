import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {

  constructor(private meta: Meta,
              private title: Title) {}

  ngOnInit() {
    this.setMeta();
  }
  public setMeta() {
    this.title.setTitle('Twinkle Kidz | Programs');
    this.meta.addTags([
      {
        name: 'description',
        content: 'We are committed to supporting the social, emotional, spiritual, physical, cognitive and language development of each child.'
      },
      {
        name: 'keywords',
        content:
          'social, emotional, spiritual, physical, cognitive, language development of each child',
      },
      {name: 'author', content: 'Michael Boonekamp'},
      {property: 'og:title', content: 'Twinkle Kidz | After-care'},
      {
        property: 'og:description',
        content:
          'We are committed to supporting the social, emotional, spiritual, physical, cognitive and language development of each child.',
      },
      {
        property: 'og:image',
        content: 'https://twinklekidzpreschool.co.za/programs',
      },
      {
        property: 'og:url',
        content: 'https://twinklekidzpreschool.co.za/programs',
      },
      {property: 'og:phone_number', content: '+27 (21) 975 3581'},
      {
        property: 'og:street-address',
        content: '31 Tara Road, Durbanville, Cape Town',
      },
      {property: 'og:email', content: 'adrienne@twinklekidzpreschool.co.za'},
      {name: 'twitter:card', content: 'summary'},
      {name: 'twitter:title', content: 'Twinkle Kidz  | Programs'},
      {
        name: 'twitter:description',
        content:
          'We are committed to supporting the social, emotional, spiritual, physical, cognitive and language development of each child.',
      },
    ]);
  }
}
