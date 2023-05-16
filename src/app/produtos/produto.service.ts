import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class ProdutoService {

constructor(private http:HttpClient) { }

  criar(produto:Produto){
    this.http.post('https://tibum-cf721-default-rtdb.firebaseio.com/produtos.json',produto).subscribe();
  }

  lerTodos(): Observable<Produto[]> {
    return this.http.get<Produto[]>('https://tibum-cf721-default-rtdb.firebaseio.com/produtos.json');
  }

}
