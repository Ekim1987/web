import {Component, OnInit, HostListener, PLATFORM_ID, Inject} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {
  faPhone as fasPhone,
  faEnvelope,
  faMobileAlt,
} from '@fortawesome/free-solid-svg-icons';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {StoreDetailsService} from '../services/store-details.service';
import {Meta, Title} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';
import Swal from 'sweetalert2';
import {ReCaptchaV3Service} from 'ng-recaptcha';
import {isPlatformBrowser, DOCUMENT} from '@angular/common';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  btnShow = true;
  spinner = false;
  mailsent = false;
  public store: any;
  contactFormHide = true;


  public formDetails = {};

  public contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    contactNumber: new FormControl('', [
      Validators.required,
      Validators.min(99999999),
      Validators.max(999999999),
    ]),
    eMail: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl(''),
  });

  constructor(
    private http: HttpClient,
    private meta: Meta,
    private title: Title,
    library: FaIconLibrary,
    private storeDetails: StoreDetailsService,
    public recaptchaV3Service: ReCaptchaV3Service
  ) {
    // library.addIcons(fasPhone, faEnvelope, faMobileAlt);
  }

  ngOnInit() {
    this.setMeta();
    this.store = this.storeDetails.store;
    console.log(this.store);
  }

  public setMeta() {
    this.title.setTitle('Twinkle Kidz | Contact Us');
    this.meta.addTags([
      {
        name: 'description',
        content: 'We would love to hear from you so please feel free to contact us.' +
          'Visit 31 Tara Road,Durbanville,Cape Town,Contact Us 021 975 3581/083 460 7816'
      },
      {
        name: 'keywords',
        content:
          'Contact number,preschool,durbanville,Twinkle Kidz,hours,location,mobile number',
      },
      {name: 'author', content: 'Michael Boonekamp'},
      {property: 'og:title', content: 'Twinkle Kidz | Contact Us'},
      {
        property: 'og:description',
        content:
          'We would love to hear from you so please feel free to contact us.' +
          'Visit 31 Tara Road,Durbanville,Cape Town,Contact Us 021 975 3581/083 460 7816',
      },
      {
        property: 'og:image',
        content: 'https://twinklekidzpreschool.co.za/contact-us',
      },
      {
        property: 'og:url',
        content: 'https://twinklekidzpreschool.co.za/contact-us',
      },
      {property: 'og:phone_number', content: '+27 (21) 975 3581'},
      {
        property: 'og:street-address',
        content: '31 Tara Road, Durbanville, Cape Town',
      },
      {property: 'og:email', content: 'adrienne@twinklekidzpreschool.co.za'},
      {name: 'twitter:card', content: 'summary'},
      {name: 'twitter:title', content: 'Twinkle Kidz | Contact Us'},
      {
        name: 'twitter:description',
        content:
          'We would love to hear from you so please feel free to contact us.' +
          'Visit 31 Tara Road,Durbanville,Cape Town,Contact Us 021 975 3581/083 460 7816',
      },
    ]);
  }

  public executeImportantAction(): void {
    this.recaptchaV3Service.execute('importantAction')
      .subscribe((token) =>
        console.log(token));
  }

  onSubmit() {
    this.spinner = true;
    this.btnShow = false;
    this.formDetails = {
      fromEmail: this.contactForm.value.eMail,
      fromName: this.contactForm.value.name + ' ' + this.contactForm.value.surname,
      addresses: [
        {
          name: 'Twinkle Kidz Website',
          emailAddress: 'adrienne@twinklekidzpreschool.co.za'
          // emailAddress: "adrienne@twinklekidzpreschool.co.za "
        }
      ],
      subject: 'Twinkle Kidz Website Contact form Submission',
      isHtml: true,
      contactNumber: this.contactForm.value.contactNumber,
      bodyContent: '\nMessage: ' + this.contactForm.value.message
    };
    const dataString = JSON.stringify(this.formDetails);

    console.log(dataString);
    Swal.fire({
      title: 'Sending Message...',
      allowEnterKey: false,
      allowOutsideClick: false,
      timerProgressBar: true,
      showConfirmButton: false,
      footer: '<div style="color:#ffc0cb;"  class="spinner-border">'
    });
    this.http.post<any>(this.store.baseUrl + 'contact-us', dataString,
      {headers: this.store.headers}).subscribe(
      (res) => {
        Swal.fire(
          'Message sent',
          'Your message has been sent',
          'success'
        );
        this.contactForm.reset();
        this.contactFormHide = true;
        this.btnShow = true;
        this.mailsent = true;
        // this.spinner = false;
      },
      (err) => {

        Swal.fire(
          'Error!',
          'Error sending message,Please try again!',
          'error'
        );
        this.btnShow = true;
        this.contactForm.reset();
        this.spinner = true;
        console.log(err);
      });
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.contactForm.dirty) {
      $event.returnValue = true;
    }
  }

}

