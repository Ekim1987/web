import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AfterCareComponent } from './after-care/after-care.component';
import { ProgramsComponent } from './programs/programs.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { ActivitiesComponent } from './activities/activities.component';
import {CarouselComponent} from './carousel/carousel.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { TopnavComponent } from './topnav/topnav.component';
import {NgbModule, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import { FeaturetteComponent } from './featurette/featurette.component';
import { TeamComponent } from './team/team.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule, FaIconLibrary, FaConfig } from '@fortawesome/angular-fontawesome';
import { NgwWowModule } from 'ngx-wow';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreDetailsService } from './services/store-details.service';
import { OfferComponent } from './offer/offer.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { RegistrationComponent } from './registration/registration.component';
import { GalleryComponent } from './gallery/gallery.component';
import { EmbedVideo } from 'ngx-embed-video';
import { SafePipe } from './safepipe';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';
 


 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    HomeComponent,
    ContactUsComponent,
    AfterCareComponent,
    ProgramsComponent,
    CurriculumComponent,
    ActivitiesComponent,
    CarouselComponent,
    TopnavComponent,
    FeaturetteComponent,
    TeamComponent,
    FooterComponent,
    OfferComponent,
    AppointmentComponent,
    RegistrationComponent,
    GalleryComponent,
    SafePipe
   
    
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    AppRoutingModule,
    SlickCarouselModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgwWowModule,
    LazyLoadImageModule,
    HttpClientModule,
    RecaptchaV3Module,
    EmbedVideo.forRoot()

   ],
  
  providers: [StoreDetailsService,FaIconLibrary,FaConfig,{provide: RECAPTCHA_V3_SITE_KEY, useValue: '6LcSmaoZAAAAANtlMeXV-y06yu8o6Pqtu5Spd6LV' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
