import { Component, OnInit } from '@angular/core';
import { TipoPagamento } from '../enums/tipo-pagamento';

@Component({
  selector: 'app-finalizar-compra',
  templateUrl: './finalizar-compra.component.html',
  styleUrls: ['./finalizar-compra.component.css']
})
export class FinalizarCompraComponent implements OnInit {

  pessoa = ['eu','tu','ele'];
  formaPagamento = Object.values(TipoPagamento);

  constructor() { }

  ngOnInit(): void {
  }

}
