import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailySurveyProgressComponent } from './daily-survey-progress/daily-survey-progress.component';
import { SurveyProjectDetailsComponent } from './survey-project-details/survey-project-details.component';
import { SurveyComponent } from './survey.component';

const routes: Routes = [
  {
    path : '', 
    component : SurveyComponent,
    children: [
      {
        path: 'daily-survey-progress', 
        component: DailySurveyProgressComponent
      },
      {
        path: 'project-details', 
        component: SurveyProjectDetailsComponent
      },
      {
        path: '', 
        redirectTo: 'daily-survey-progress', 
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})
export class SurveyRoutingModule { }
