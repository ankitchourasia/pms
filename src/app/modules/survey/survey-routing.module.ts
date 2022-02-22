import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailySurveyProgressComponent } from './daily-survey-progress/daily-survey-progress.component';
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
