import { Component, OnInit} from '@angular/core';
import { TipoPagamento } from '../enums/tipo-pagamento';
import { AutenticacaoService } from '../services/autenticacao.service';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../model/cliente';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-finalizar-compra',
  templateUrl: './finalizar-compra.component.html',
  styleUrls: ['./finalizar-compra.component.css']
})
export class FinalizarCompraComponent implements OnInit {

  listaEnderecos: Observable<string[]> = of();
  formaPagamento = Object.values(TipoPagamento);
  inEndereco:string='';

  constructor(private clienteService: ClienteService,
              private autenticacaoService: AutenticacaoService,
              private router:Router)
  {
    this.atualizaListaEnderecos();
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
    setTimeout(()=>this.atualizaListaEnderecos(),1000);
  }

  atualizaListaEnderecos() {
    this.clienteService.lerPorId(this.autenticacaoService.user.uid).subscribe(
      c => {
        if(c.endereco)
          this.listaEnderecos = of(c.endereco);
      }
    );
  }

  finalizarCompra() {
    localStorage.clear();
    alert("OBRIGADO PELA COMPRA!");
    this.router.navigate(['/produtos']);
  }

  limpaCampo(){
    this.inEndereco = '';
  }
}
