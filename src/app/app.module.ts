import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProdutosModule } from './produtos/produtos.module';
import { LoginModule } from './login/login.module';
import { CadastroModule } from './cadastro/cadastro.module';
import { SharedModule } from './shared/shared.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { DetalhesProdutoModule } from './detalhesProduto/detalhesProduto.module';
import { CarrinhoModule } from './carrinho/carrinho.module';
import { FinalizarCompraComponent } from './finalizar-compra/finalizar-compra.component';
import { FinalizarCompraModule } from './finalizar-compra/finalizar-compra.module';

@NgModule({
  declarations: [
    AppComponent,
    FinalizarCompraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProdutosModule,
    LoginModule,
    CadastroModule,
    DetalhesProdutoModule,
    SharedModule,
    CarrinhoModule,
    FinalizarCompraModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCQdtspyxoIPSJK0j9RwIIrFDoEDDe1inM",
      authDomain: "tibum-cf721.firebaseapp.com",
      databaseURL: "https://tibum-cf721-default-rtdb.firebaseio.com",
      projectId: "tibum-cf721",
      storageBucket: "tibum-cf721.appspot.com",
      messagingSenderId: "550523093894",
      appId: "1:550523093894:web:419cad5d5d4fb44ba56207"
    }),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
