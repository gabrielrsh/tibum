import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProdutosModule } from './produtos/produtos.module';
import { LoginModule } from './login/login.module';
import { CadastroModule } from './cadastro/cadastro.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProdutosModule,
    LoginModule,
    CadastroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
