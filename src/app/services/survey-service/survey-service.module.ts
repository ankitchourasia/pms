import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyService } from './survey.service';



@NgModule({
  providers: [
    SurveyService
  ],
  imports: [
    CommonModule
  ]
})
export class SurveyServiceModule { }
