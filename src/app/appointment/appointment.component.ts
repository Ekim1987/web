import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {
  faPhone as fasPhone,
  faEnvelope,
  faMobileAlt,
  faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {StoreDetailsService} from '../services/store-details.service';
import {Meta, Title} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';
import Swal from 'sweetalert2';
// tslint:disable-next-line:max-line-length
import {
  NgbDateStruct,
  NgbDatepickerConfig,
  NgbDate,
  NgbCalendar,
  NgbDateParserFormatter,
  NgbDateAdapter,
  NgbTimeStruct
} from '@ng-bootstrap/ng-bootstrap';
import {CustomAdapter, CustomDateParserFormatter} from '../datefromat';


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss'],
  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter}
  ]
})
export class AppointmentComponent implements OnInit {
  dateModel: NgbDateStruct;
  timeModel: NgbTimeStruct;

  hourStep = 1;
  minuteStep = 15;
  secondStep = 30;


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
    date: new FormControl('', [Validators.required]),
    // time: new FormControl(''),
    time: new FormControl('', Validators.required),

  });

  constructor(
    private http: HttpClient,
    private meta: Meta,
    private title: Title,
    library: FaIconLibrary,
    private storeDetails: StoreDetailsService,
    calendar: NgbCalendar,
    config: NgbDatepickerConfig
  ) {
    const current = new Date();
    config.minDate = {
      year: current.getFullYear(), month:
        current.getMonth() + 1, day: current.getDate()
    };
    config.outsideDays = 'hidden';
    config.markDisabled = (date: NgbDate) => calendar.getWeekday(date) >= 6;
    // library.addIcons( fasPhone, faEnvelope, faMobileAlt, faCalendarAlt);
  }


  ngOnInit() {


    this.setMeta();
    this.store = this.storeDetails.store;

  }

  public setMeta() {
    this.title.setTitle('Twinkle Kidz | Appointment');
    this.meta.addTags([
      {
        name: 'description',
        itemprop: 'description',
        content: 'We would love to visit us.Please feel free to come visit us.Visit 31 Tara Road,' +
          'Durbanville,Cape Town,Contact Us 021 975 3581/083 460 7816'
      },
      {
        name: 'keywords',
        content:
          'book appointments,preschool,durbanville,Twinkle Kidz,booking,come vist us,appointment',
      },
      {name: 'author', content: 'Michael Boonekamp'},
      {property: 'og:title', content: 'Twinkle Kidz | Appointment'},
      {
        property: 'og:description',
        content:
          'We would love to visit us.Please feel free to come visit us.Visit 31 Tara Road,' +
          'Durbanville,Cape Town,Contact Us 021 975 3581/083 460 7816',
      },
      {
        property: 'og:image', itemprop: 'image',
        content: 'https://twinklekidzpreschool.co.za/appointment',
      },
      {
        property: 'og:url',
        content: 'https://twinklekidzpreschool.co.za/appointment',
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
          'We would love to visit us.Please feel free to come visit us.Visit 31 Tara Road,Durbanville,' +
          'Cape Town,Contact Us 021 975 3581/083 460 7816',
      },
    ]);
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
          emailAddress: 'micky.lives@gmail.com '
          // emailAddress: "adrienne@twinklekidzpreschool.co.za "
        }
      ],
      subject: 'Twinkle Kidz Website Appoinment form Submission',
      isHtml: false,
      bodyContent: 'Customer contact name ' + this.contactForm.value.name + ' '
        + this.contactForm.value.surname + ' Message ' + this.contactForm.value.message + ' Contact Number: 0'
        // tslint:disable-next-line:max-line-length
        + this.contactForm.value.contactNumber + ' ' + 'Appointment Date: ' + this.contactForm.value.date + 'Appoinment Time ' + this.contactForm.value.time.hour + ':' + this.contactForm.value.time.minute,
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
}
