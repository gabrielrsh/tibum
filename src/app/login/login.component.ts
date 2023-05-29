import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AutenticacaoService } from '../services/autenticacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  checkoutForm = this.formBuilder.group({inEmail:"",inSenha:""});

  constructor(
    private formBuilder:FormBuilder,
    private autenticacaoService:AutenticacaoService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    this.autenticacaoService.signIn({
      email: this.checkoutForm.value.inEmail!,
      password: this.checkoutForm.value.inSenha!
    }).subscribe({
      next: () => {this.router.navigate(['/produtos'])},
      error: error => {
        alert(error.message)
      }
    });
    this.checkoutForm.reset();
  }

}
