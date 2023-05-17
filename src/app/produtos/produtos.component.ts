import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from './produto.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos: Observable<any[]> = of();

  constructor(private http:HttpClient, private produtoService:ProdutoService) {
    this.produtos = produtoService.lerTodos();
  }

  ngOnInit() {
  }

  cria(){

  }

	ler(){

	}

}
