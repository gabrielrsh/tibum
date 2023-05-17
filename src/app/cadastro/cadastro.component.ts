import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  form = this.formBuilder.group(
    {inEmail:"",inConfirmarSenha:"",inSenha:"",inTelefone:""}
    );

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.form.value);
    this.form.reset();
  }

}
