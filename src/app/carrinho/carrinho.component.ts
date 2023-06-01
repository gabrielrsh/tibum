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
  
  constructor(private router: Router) {
    let produtoSelecionado = this.router.getCurrentNavigation()?.extras.state
    if(produtoSelecionado){
      this.produtos = JSON.parse(this.ls.getItem('produtos') || '[]');
      let produtoCarrinho = new ProdutoCarrinho(produtoSelecionado['nome'], produtoSelecionado['preco'], produtoSelecionado['imagem'], 1);
      this.adicionar(produtoCarrinho);
      this.ls.setItem('produtos', JSON.stringify(this.produtos));
      console.log(this.produtos);
    } else {
      //Se veio a partir do menu da navbar carrinho
    }
  }

  ngOnInit(): void {
  }

  adicionar(produtoCarrinho:ProdutoCarrinho){
    this.produtos.push(produtoCarrinho);
  }

  limparCarrinho(){
    this.ls.clear();
  }
}
