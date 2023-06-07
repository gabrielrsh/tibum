import { Component, OnInit} from '@angular/core';
import { TipoPagamento } from '../enums/tipo-pagamento';
import { AutenticacaoService } from '../services/autenticacao.service';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../model/cliente';


@Component({
  selector: 'app-finalizar-compra',
  templateUrl: './finalizar-compra.component.html',
  styleUrls: ['./finalizar-compra.component.css']
})
export class FinalizarCompraComponent implements OnInit {

  listaEnderecos: string[] = [];
  formaPagamento = Object.values(TipoPagamento);
  inEndereco:string='';

  constructor(private clienteService: ClienteService, private autenticacaoService: AutenticacaoService) {
    this.clienteService.lerPorId(this.autenticacaoService.user.uid).subscribe(
      c => {
        if(c.endereco)
          this.listaEnderecos = c.endereco;
      }
    );
  }

  ngOnInit(): void {
  }

  addEndereco(){
    this.clienteService.lerPorId(this.autenticacaoService.user.uid).subscribe(c=>{
      let cliente = new Cliente(c.uid, c.email, c.senha, c.telefone);
      if(c.endereco) {
        cliente.endereco = c.endereco;
      }
      cliente.addEndereco(this.inEndereco);

      this.clienteService.criar(cliente);

      this.limpaCampo();
    });
  }

  limpaCampo(){
    this.inEndereco = '';
  }
}
