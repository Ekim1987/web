import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import {HomeComponent} from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AfterCareComponent} from './after-care/after-care.component';
import {ProgramsComponent} from './programs/programs.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { ActivitiesComponent } from './activities/activities.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { GalleryComponent } from './gallery/gallery.component';


const routes: Routes = [
  {path:'about-us',component:AboutComponent},
  {path:'',component:HomeComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'after-care',component:AfterCareComponent},
  {path:'programs',component:ProgramsComponent},
  {path:'curriculum',component:CurriculumComponent},
  {path:'extra-activities',component:ActivitiesComponent},
  {path:'appointment',component:AppointmentComponent},
  {path:'gallery',component:GalleryComponent},

  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
