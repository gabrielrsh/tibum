import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'cadastro', component:CadastroComponent}
    ]),
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [CadastroComponent]
})
export class CadastroModule { }
