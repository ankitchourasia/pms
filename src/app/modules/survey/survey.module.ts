import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailySurveyProgressComponent } from './daily-survey-progress/daily-survey-progress.component';
import { SurveyRoutingModule } from './survey-routing.module';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { SurveyComponent } from './survey.component';
import { FormsModule } from '@angular/forms';
import { SurveyProjectDetailsComponent } from './survey-project-details/survey-project-details.component';
import { SearchFilterPipe } from 'src/app/pipes/search-filter.pipe';



@NgModule({
  declarations: [
    DailySurveyProgressComponent,
    SurveyComponent,
    SurveyProjectDetailsComponent,
    SearchFilterPipe
  ],
  imports: [
    CommonModule,
    NavbarModule,
    SurveyRoutingModule,
    FormsModule
  ]
})
export class SurveyModule { }
