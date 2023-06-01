import { TipoPagamento } from "../enums/tipo-pagamento";
import { ProdutoCarrinho } from "./produtoCarrinho";

export class DadosCompra {
	produtos: ProdutoCarrinho[] = [];
  data: Number = Date.now();
  formaPagamento: TipoPagamento = TipoPagamento.Boleto;

	construtor() {}
}
