import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule  } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
// import { HeaderComponentModule } from '@eas-components/header/header-component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
