import { Component, OnInit } from '@angular/core';
import { ProdutoCarrinho } from '../model/produtoCarrinho';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  produtos: ProdutoCarrinho[] = [];
  ls = localStorage;
  total = 0;
  
  constructor(private router: Router) {
    let produtoSelecionado = this.router.getCurrentNavigation()?.extras.state
    if(produtoSelecionado){
      this.produtos = JSON.parse(this.ls.getItem('produtos') || '[]');
      let produtoCarrinho = new ProdutoCarrinho(produtoSelecionado['nome'], produtoSelecionado['preco'], produtoSelecionado['imagem'], 1);
      this.adicionar(produtoCarrinho);
      this.ls.setItem('produtos', JSON.stringify(this.produtos));
      console.log(this.produtos);
      this.calcularTotal();
    } else {
      this.produtos = JSON.parse(this.ls.getItem('produtos') || '[]');
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
  }

  pesquisarItem(produto: ProdutoCarrinho): number{
    return this.produtos.indexOf(produto);
  }

  excluirItem(produto: ProdutoCarrinho){
    this.produtos.splice(this.pesquisarItem(produto), 1);
    this.ls.setItem('produtos', JSON.stringify(this.produtos));
    this.calcularTotal();
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
    this.ls.setItem('produtos', JSON.stringify(this.produtos));
    this.calcularTotal();
  }

  decrementarItem(produto: ProdutoCarrinho){
    if(produto.quantidade > 1){
      produto.quantidade--;
      this.ls.setItem('produtos', JSON.stringify(this.produtos));
      this.calcularTotal();
    }
  }
}
