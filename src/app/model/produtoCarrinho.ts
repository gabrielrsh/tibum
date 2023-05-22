import { Produto } from "./produto";

export class ProdutoCarrinho extends Produto {
  quantidade: number;

  constructor(nome: string, preco: number, imagem: string, quantidade: number) {
    super(nome, preco, imagem);
    this.quantidade = quantidade;
  }
}
