import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {

  constructor(private meta: Meta,
              private title: Title) {
  }

  ngOnInit() {
    this.setMeta();
  }

  public setMeta() {
    this.title.setTitle('Twinkle Kidz | Curriculum');
    this.meta.addTags([
      {
        name: 'description',
        content: 'Twinkle Kidz Preschool is an ideal learning environment for children aged 3-5. The main focus is developing each child holistically. We endeavour to make learning fun, whilst nurturing and building each child’s independence and social skills. Social skills are learnt during team activities, taking turns playing games, and during activities, the teacher facilitates this process.'
      },
      {
        name: 'keywords',
        content:
          'social, emotional, spiritual, physical, cognitive, language development of each child',
      },
      {name: 'author', content: 'Michael Boonekamp'},
      {property: 'og:title', content: 'Twinkle Kidz | Curriculum'},
      {
        property: 'og:description',
        content:
          'Twinkle Kidz Preschool is an ideal learning environment for children aged 3-5. The main focus is developing each child holistically. We endeavour to make learning fun, whilst nurturing and building each child’s independence and social skills. Social skills are learnt during team activities, taking turns playing games, and during activities, the teacher facilitates this process.',
      },
      {
        property: 'og:image',
        content: 'https://twinklekidzpreschool.co.za/curriculum',
      },
      {
        property: 'og:url',
        content: 'https://twinklekidzpreschool.co.za/curriculum',
      },
      {property: 'og:phone_number', content: '+27 (21) 975 3581'},
      {
        property: 'og:street-address',
        content: '31 Tara Road, Durbanville, Cape Town',
      },
      {property: 'og:email', content: 'adrienne@twinklekidzpreschool.co.za'},
      {name: 'twitter:card', content: 'summary'},
      {name: 'twitter:title', content: 'Twinkle Kidz  | Curriculum'},
      {
        name: 'twitter:description',
        content:
          'Twinkle Kidz Preschool is an ideal learning environment for children aged 3-5. The main focus is developing each child holistically. We endeavour to make learning fun, whilst nurturing and building each child’s independence and social skills. Social skills are learnt during team activities, taking turns playing games, and during activities, the teacher facilitates this process.',
      },
    ]);
  }

}
