import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalhesProdutoComponent } from './detalhesProduto.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
          path: 'produto/:id', component: DetalhesProdutoComponent
      },
  ])
  ],
  declarations: [DetalhesProdutoComponent]
})
export class DetalhesProdutoModule { }
