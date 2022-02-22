import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailySurveyProgressComponent } from './daily-survey-progress/daily-survey-progress.component';
import { SurveyRoutingModule } from './survey-routing.module';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { SurveyComponent } from './survey.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DailySurveyProgressComponent,
    SurveyComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    SurveyRoutingModule,
    FormsModule
  ]
})
export class SurveyModule { }
