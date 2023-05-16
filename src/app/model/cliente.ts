export class Cliente {
  email:string;
  senha:string;
  telefone:string;
  endereco: string[]=[];

  constructor(email:string,senha:string,telefone:string){
    this.email = email;
    this.senha = senha;
    this.telefone = telefone;

  }

  addEndereco(endereco:string){
    this.endereco.push(endereco);
  }

  removeEndereco(endereco:string){
    let indice = this.endereco.indexOf(endereco);
    this.endereco.splice(indice,1);
  }
}
