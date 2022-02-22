import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBarComponent } from './main-bar/main-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';



@NgModule({
  declarations: [
    MainBarComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainBarComponent,
    SideBarComponent
  ]
})
export class NavbarModule { }
