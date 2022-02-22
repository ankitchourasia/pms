import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DcHomeComponent } from './dc-home/dc-home.component';

const routes: Routes = [
  {
    path : '', 
    component : DcHomeComponent,
    // canActivate: [CanActivateAuthGuard],
    children: [
      {
        path: '',
        // canActivateChild: [CanActivateAuthGuard],
        children: [
          {
            path: 'home', 
            component: DcHomeComponent
          },
          {
            path: '', 
            redirectTo: 'home', 
            pathMatch: 'full'
          }
        ]
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
export class DCUserRoutingModule { }
