import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../services/produto.service';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto';

@Component({
  selector: 'app-detalhesProduto',
  templateUrl: './detalhesProduto.component.html',
  styleUrls: ['./detalhesProduto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {

  produtoObs:Observable<Produto>|undefined;

  constructor(private route: ActivatedRoute, private produtoService: ProdutoService) {
    this.route.params.subscribe(params=> this.produtoObs = this.produtoService.lerPorId(params['id']));
  }

  ngOnInit() {
  }

}
