import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    redirectTo: 'survey',
    pathMatch: 'full'
  },
  {
    path : 'survey', 
    loadChildren: () => import('./modules/survey/survey.module').then(m => m.SurveyModule)
  },
  {
    path : 'dc', 
    loadChildren: () => import('./modules/dc-user/dc-user.module').then(m => m.DcUserModule)
  },
  { 
    path: '**', 
    redirectTo: '',
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
