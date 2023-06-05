import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DetalhesProdutoComponent } from './detalhesProduto/detalhesProduto.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { FinalizarCompraComponent } from './finalizar-compra/finalizar-compra.component';

const routes: Routes = [
  {path: '', redirectTo:'produtos', pathMatch: 'full'},
  {path: 'login', component:LoginComponent},
  {path: 'cadastro', component:CadastroComponent},
  {path: 'produto/:id', component:DetalhesProdutoComponent},
  {path: 'carrinho', component:CarrinhoComponent},
  {path: 'finalizarCompra', component:FinalizarCompraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
