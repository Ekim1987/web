import { Component, OnInit } from '@angular/core';
import { StoreDetailsService } from '../services/store-details.service';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public store: any;
  year: number = new Date().getFullYear();
  faHeart = faHeart;

  constructor(private storeDetails: StoreDetailsService) {}

  ngOnInit() {
    this.store = this.storeDetails.store;
  }
}
