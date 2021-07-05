import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  constructor(private meta: Meta,
              private title: Title) {}

  ngOnInit() {
    this.setMeta();
  }
  public setMeta() {
    this.title.setTitle('Twinkle Kidz | Extra Curricular activities');
    this.meta.addTags([
      {
        name: 'description',
        content: 'Creative Art which is once a month and different to the art activities presented at school. The children use many wooden materials and go home with an item which has sentimental value to be used at home.'
      },
      {
        name: 'keywords',
        content:
          'Creative Art which is once a month and different to the art activities presented at school. The children use many wooden materials and go home with an item which has sentimental value to be used at home.',
      },
      {name: 'author', content: 'Michael Boonekamp'},
      {property: 'og:title', content: 'Twinkle Kidz | Extra Curricular activities'},
      {
        property: 'og:description',
        content:
          'Creative Art which is once a month and different to the art activities presented at school. The children use many wooden materials and go home with an item which has sentimental value to be used at home.',
      },
      {
        property: 'og:image',
        content: 'https://twinklekidzpreschool.co.za/extra-activities',
      },
      {
        property: 'og:url',
        content: 'https://twinklekidzpreschool.co.za/extra-activities',
      },
      {property: 'og:phone_number', content: '+27 (21) 975 3581'},
      {
        property: 'og:street-address',
        content: '31 Tara Road, Durbanville, Cape Town',
      },
      {property: 'og:email', content: 'adrienne@twinklekidzpreschool.co.za'},
      {name: 'twitter:card', content: 'summary'},
      {name: 'twitter:title', content: 'Twinkle Kidz  | Extra Curricular activities'},
      {
        name: 'twitter:description',
        content:
          'Creative Art which is once a month and different to the art activities presented at school. The children use many wooden materials and go home with an item which has sentimental value to be used at home.',
      },
    ]);
  }

}
