import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarrinhoComponent } from '../carrinho/carrinho.component';
import { FinalizarCompraComponent } from './finalizar-compra.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
          path: 'finalizarCompra', component: FinalizarCompraComponent,
      },
    ])
  ]
})
export class FinalizarCompraModule { }
