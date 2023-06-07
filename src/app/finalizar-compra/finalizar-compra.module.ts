import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FinalizarCompraComponent } from './finalizar-compra.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
          path: 'finalizarCompra', component: FinalizarCompraComponent,
      },
    ]),
  ]
})
export class FinalizarCompraModule { }
