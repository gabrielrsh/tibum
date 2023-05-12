import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosComponent } from './produtos.component';
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
          path: 'produtos', component: ProdutosComponent
      },
  ])
  ],
  declarations: [ProdutosComponent]
})
export class ProdutosModule { }
