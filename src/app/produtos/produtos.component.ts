import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  constructor(private http:HttpClient) {
    http.post('https://tibum-cf721-default-rtdb.firebaseio.com/produtos.json',{"hello":"world"}).subscribe();
  }

  ngOnInit() {
  }
  add(){

  }
}
