import { Component, OnInit } from '@angular/core';
import { ProdutoCarrinho } from '../model/produtoCarrinho';
import { ActivatedRoute, Router } from '@angular/router';
import { AutenticacaoService } from '../services/autenticacao.service';
import { Produto } from '../model/produto';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  produtos: ProdutoCarrinho[] = [];
  ls = localStorage;
  total = 0;
  disableAvancar=true;

  constructor(private router: Router, private autenticacaoService:AutenticacaoService) {
    const state = this.router.getCurrentNavigation()?.extras.state as {produto: Produto};
    let produtoSelecionado = state.produto;

    if(produtoSelecionado){
      this.produtos = JSON.parse(this.ls.getItem(this.autenticacaoService.getUser().uid) || '[]');
      let produtoCarrinho = new ProdutoCarrinho(produtoSelecionado['nome'], produtoSelecionado['preco'], produtoSelecionado['imagem'], 1);
      this.adicionar(produtoCarrinho);
      this.ls.setItem(this.autenticacaoService.getUser().uid, JSON.stringify(this.produtos));

      this.calcularTotal();
      this.disableAvancar = false;
    } else {
      this.produtos = JSON.parse(this.ls.getItem(this.autenticacaoService.getUser().uid) || '[]');
    }
  }

  ngOnInit(): void {
  }

  adicionar(produtoCarrinho:ProdutoCarrinho){
    this.produtos.push(produtoCarrinho);
  }

  limparCarrinho(){
    this.ls.clear();
    this.produtos = [];
    this.calcularTotal();
    this.disableAvancar = true;
  }

  pesquisarItem(produto: ProdutoCarrinho): number{
    return this.produtos.indexOf(produto);
  }

  excluirItem(produto: ProdutoCarrinho){
    this.produtos.splice(this.pesquisarItem(produto), 1);
    this.ls.setItem(this.autenticacaoService.getUser().uid, JSON.stringify(this.produtos));
    this.calcularTotal();
    if(!this.produtos.length)
      this.disableAvancar = true;
  }

  calcularTotal(){
    let total = 0;
    this.produtos.forEach(produto => {
      total+=produto.preco * produto.quantidade;
    });
    this.total = total;
  }

  incrementarItem(produto: ProdutoCarrinho){
    produto.quantidade++;
    this.ls.setItem(this.autenticacaoService.getUser().uid, JSON.stringify(this.produtos));
    this.calcularTotal();
  }

  decrementarItem(produto: ProdutoCarrinho){
    if(produto.quantidade > 1){
      produto.quantidade--;
      this.ls.setItem(this.autenticacaoService.getUser().uid, JSON.stringify(this.produtos));
      this.calcularTotal();
    }
  }
}
