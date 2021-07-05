import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgwWowService } from 'ngx-wow';
import { Subscription }   from 'rxjs';
 


@Component({
  selector: 'app-featurette',
  templateUrl: './featurette.component.html',
  styleUrls: ['./featurette.component.scss']
})
export class FeaturetteComponent implements OnInit {
  private wowSubscription: Subscription;
 
  constructor(private wowService: NgwWowService){
   }
 ngOnInit() {
    this.wowService.init(); 
   
 

}

}
