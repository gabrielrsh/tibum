import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrinhoComponent } from './carrinho.component';
import { RouterModule } from '@angular/router';
import { ProdutosComponent } from '../produtos/produtos.component';



@NgModule({
  declarations: [
    CarrinhoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
          path: 'carrinho', component: CarrinhoComponent,
      },
  ])
  ]
})
export class CarrinhoModule { }
