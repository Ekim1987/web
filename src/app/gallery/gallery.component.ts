import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  imagesArray = [];
  showVideo = false;
  name = 'Michael';

  youtube = [
    { url: 'https://www.youtube.com/embed/Ou3EltAGkj8',
      text: 'Cras justo odio, dapibus ac facilisis in,' +
        ' egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.' },
    { url: 'https://www.youtube.com/embed/gqKL8UyFncA',
      text: 'Cras justo odio, dapibus ac facilisis in,' +
        ' egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.' },
  ];

  constructor( private meta: Meta,
               private title: Title, ) {}


  ngOnInit() {
  this.getImages();
  this.setMeta();

  }

  public getImages(): void {
    for (let i = 1; i <= 42; i++) {
      const src = 'assets/img/Gallery/' + i + '.jpg';
      const caption = 'Image ' + i + 'Caption here';
      const album = {
        src,
        caption
      };
      this.imagesArray.push(album);
    }

  }
  public setMeta() {
    this.title.setTitle('Twinkle Kidz | Gallery');
    this.meta.addTags([
      { name: 'description', content: 'Twinkle Kidz Preschool  photo gallery and youtube videos ' },
      {
        name: 'keywords',
        content:
          'photo gallery,preschool,durbanville,Twinkle Kidz,photos',
      },
      { name: 'author', content: 'Michael Boonekamp' },
      { property: 'og:title', content: 'Twinkle Kidz | Gallery' },
      {
        property: 'og:description',
        content:
          'Twinkle Kidz Preschool  photo gallery and youtube videos ',
      },
      {
        property: 'og:image',
        content: 'https://twinklekidzpreschool.co.za/gallery',
      },
      {
        property: 'og:url',
        content: 'https://twinklekidzpreschool.co.za/gallery',
      },
      { property: 'og:phone_number', content: '+27 (21) 975 3581' },
      {
        property: 'og:street-address',
        content: '31 Tara Road, Durbanville, Cape Town',
      },
      { property: 'og:email', content: 'adrienne@twinklekidzpreschool.co.za' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: 'Twinkle Kidz | Gallery' },
      {
        name: 'twitter:description',
        content:
          'Twinkle Kidz Preschool  photo gallery and youtube videos',
      },
    ]);
  }
}
