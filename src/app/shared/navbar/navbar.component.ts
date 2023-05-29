import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logado:boolean=false;
  email:string|null = "";

  constructor(public autenticacaoService:AutenticacaoService) {

  }

  ngOnInit(): void {
  }

  sair():void {
    this.autenticacaoService.sair();
  }

}
