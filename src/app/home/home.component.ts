import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  constructor(private title: Title , private meta: Meta) { }

  ngOnInit() {
    this.setMeta();
  }
public setMeta() {
  this.title.setTitle('Twinkle Kidz | Home');
  this.meta.addTags([
   {name: 'description', content: 'Warm, nurturing, relaxed and secure environment for Children ages 2 to 6. Preschool in Durbanville.'},
   {name: 'keywords', content: 'Durbanville, preschool,creche,children 2 to 6 years,grade r,private school,english,afrikaans,school'},
   {name: 'author', content: 'Michael Boonekamp'},
   {property: 'og:title', content: 'Twinkle Kidz | Home' },
   {property: 'og:description', content: 'nurturing, relaxed and secure environment for Children ages 2 to 6. Preschool in Durbanville.'},
   {property: 'og:url', content: 'https://twinklekidzpreschool.co.za/'},
   {property: 'og:phone_number', content: '+27 (21) 975 3581'},
   {property: 'og:street-address', content: '31 Tara Road, Durbanville, Cape Town'},
   {property: 'og:email', content: 'adrienne.at@gmail.com'},
   {name: 'twitter:card', content: 'summary'},
   {name: 'twitter:title', content: 'Twinkle Kidz | Home'},
   {name: 'twitter:description', content: 'Warm,relaxed and secure environment for Children ages 2 to 6. Preschool in Durbanville.'}
  ]);
}
}
