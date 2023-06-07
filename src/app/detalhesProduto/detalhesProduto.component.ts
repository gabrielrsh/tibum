import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../services/produto.service';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto';
import { ProdutoCarrinho } from '../model/produtoCarrinho';
import { AutenticacaoService } from '../services/autenticacao.service';

@Component({
  selector: 'app-detalhesProduto',
  templateUrl: './detalhesProduto.component.html',
  styleUrls: ['./detalhesProduto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {

  produtoObs:Observable<Produto>|undefined;

  constructor(private route: ActivatedRoute,
              private produtoService: ProdutoService,
              private router:Router,
              private autenticacaoService:AutenticacaoService) {
    this.route.params.subscribe(params=> this.produtoObs = this.produtoService.lerPorId(params['id']));
  }

  ngOnInit() {
  }

  actComprar(produto:Produto){
    if(!this.autenticacaoService.getUser()){
      this.router.navigate(['/login']);
    }
    else {
      this.router.navigate(['/carrinho'], { state: { produto: produto } });
    }
  }
}
