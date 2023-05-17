import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
          path: 'login', component: LoginComponent
      },
    ]),
    ReactiveFormsModule,
    FormsModule,
  ],

  declarations: [LoginComponent]
})
export class LoginModule { }
