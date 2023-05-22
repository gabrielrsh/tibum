import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  form = this.formBuilder.group(
    {inEmail:"",inConfirmarSenha:"",inSenha:"",inTelefone:""}
  );

  constructor(private formBuilder:FormBuilder, private http:HttpClient, private clienteService:ClienteService) {
    clienteService.lerTodos().subscribe(val => console.log(val));
  }

  ngOnInit() {
  }

  onSubmit(){
    if(this.form.value.inSenha == this.form.value.inConfirmarSenha){
      this.clienteService.criar(new Cliente(this.form.value.inEmail!,this.form.value.inSenha!, this.form.value.inTelefone!))
      console.log(this.form.value);
      this.form.reset();
    }
    else{
      alert("As senhas devem ser iguais!");
    }
  }

}
