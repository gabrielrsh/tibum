import { Injectable } from '@angular/core';
import { ProdutoCarrinho } from '../model/produtoCarrinho';
import { TipoPagamento } from '../enums/tipo-pagamento';
import { AutenticacaoService } from './autenticacao.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  

  constructor(private http: HttpClient) { }

  finazar() {
    this.http.post('https://tibum-cf721-default-rtdb.firebaseio.com/clientes.json', '').subscribe();
  }

  cancelar() { }

}