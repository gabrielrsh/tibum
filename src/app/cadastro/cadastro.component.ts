import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../model/cliente';
import { AutenticacaoService } from '../services/autenticacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  form = this.formBuilder.group(
    {inEmail:"",inConfirmarSenha:"",inSenha:"",inTelefone:""}
  );

  constructor(
    private formBuilder:FormBuilder,
    private clienteService:ClienteService,
    private autenticacaoService:AutenticacaoService,
    private router:Router
  ) { clienteService.lerTodos().subscribe(val => console.log(val)); }

  ngOnInit() { }

  onSubmit(){
    if(this.form.value.inSenha == this.form.value.inConfirmarSenha) {

      this.autenticacaoService.registrar(
        {email:this.form.value.inEmail!,password:this.form.value.inSenha!}
      ).then(uid => this.clienteService.criar(new Cliente(uid,this.form.value.inEmail!, this.form.value.inSenha!, this.form.value.inTelefone!)));

      this.router.navigate(['/login']);
    }
    else {
      alert("As senhas devem ser iguais!");
    }
  }

}
