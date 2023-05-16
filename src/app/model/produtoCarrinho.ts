import { Produto } from "./produto";

export class ProdutoCarrinho extends Produto{
  quantidade: number;

  constructor(nome:string,preco:number,quantidade:number){
    super(nome,preco);
    this.quantidade = quantidade;
  }
}
