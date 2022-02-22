import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DcHomeComponent } from './dc-home/dc-home.component';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { DCUserRoutingModule } from './dc-user-routing.module';



@NgModule({
  declarations: [
    DcHomeComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    DCUserRoutingModule
  ]
})
export class DcUserModule { }
