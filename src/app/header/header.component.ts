import {Component, OnInit, Inject, HostListener} from '@angular/core';
import {faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
// Add icons to the library for convenient access in other components
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faLinkedin, faFacebook, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {StoreDetailsService} from '../services/store-details.service';
import {DOCUMENT} from '@angular/common';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']

})
export class HeaderComponent implements OnInit {
  public store: any;
  isMobileLayout = false;
  faWhatsapp = faWhatsapp;
  faFacebook = faFacebook;
  faPhone = faPhone;
  faEnvelope = faEnvelope;

  constructor(@Inject(DOCUMENT) private document: Document, library: FaIconLibrary, private storeDetails: StoreDetailsService) {
  }

  ngOnInit() {
    this.store = this.storeDetails.store;
    this.isMobileLayout = this.mobileToggle();
    window.onresize = () => {
      this.isMobileLayout = this.mobileToggle();
    };
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      this.document.getElementById('top-bar').classList.add('hideNav');
      this.document.getElementById('navi').classList.add('naviScroll');
    } else {
      this.document.getElementById('top-bar').classList.remove('hideNav');
      this.document.getElementById('navi').classList.remove('naviScroll');
    }
  }

  ToggleNavBar() {
    const element: HTMLElement = document.getElementsByClassName('navbar-toggler')[0] as HTMLElement;
    if (element.getAttribute('aria-expanded') === 'true') {
      element.click();
    }
  }

  mobileToggle() {
    const w = document.documentElement.clientWidth;
    const breakpoint = 768;
    if (w < breakpoint) {
      return true;
    } else {
      return false;
    }
  }
}
