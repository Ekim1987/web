import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  faQuoteLeft = faQuoteLeft;
  // constructor( faIcon:FaIconLibrary) {
  //   faIcon.addIcons(faQuoteLeft)
  //  }
  constructor( private meta: Meta,
    private title: Title,) {
    
   }

  ngOnInit() {
    this.setMeta();
  }

  public setMeta() {
    this.title.setTitle('Twinkle Kidz | About Us');
    this.meta.addTags([
      { name: 'description', content: 'Twinkle Kidz is a privately owned and managed preschool. At Twinkle Kidz we are committed to catering for the individual needs of pre-schoolers.' },
      {
        name: 'keywords',
        content:
          'creche,preschool,durbanville,Twinkle Kidz,about us,who we are',
      },
      { name: 'author', content: 'Michael Boonekamp' },
      { property: 'og:title', content: 'Twinkle Kidz | About Us' },
      {
        property: 'og:description',
        content:
          'Twinkle Kidz is a privately owned and managed preschool. At Twinkle Kidz we are committed to catering for the individual needs of pre-schoolers.',
      },
      {
        property: 'og:image',
        content: 'https://twinklekidzpreschool.co.za/about-us',
      },
      {
        property: 'og:url',
        content: 'https://twinklekidzpreschool.co.za/about-us',
      },
      { property: 'og:phone_number', content: '+27 (21) 975 3581' },
      {
        property: 'og:street-address',
        content: '31 Tara Road, Durbanville, Cape Town',
      },
      { property: 'og:email', content: 'adrienne@twinklekidzpreschool.co.za' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: 'Twinkle Kidz | About Us' },
      {
        name: 'twitter:description',
        content:
          'Twinkle Kidz is a privately owned and managed preschool. At Twinkle Kidz we are committed to catering for the individual needs of pre-schoolers.',
      },
    ]);
  }

}
