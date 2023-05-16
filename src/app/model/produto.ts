export class Produto {
  nome: string;
  preco: number;
  imagem: string;

  constructor(nome:string, preco:number, imagem:string){
    this.nome = nome;
    this.preco = preco;
    this.imagem = imagem;
  }
}
