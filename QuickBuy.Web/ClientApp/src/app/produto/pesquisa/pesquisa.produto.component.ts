import { Component, OnInit } from "@angular/core";
import { Produto } from "../../model/Produto";
import { ProdutoServico } from "../../servicos/produto/produto.servico";

@Component({
  selector: "pesquisa-produto",
  templateUrl: "./pesquisa.produto.component.html",
  styleUrls: ["./pesquisa.produto.component.css"]
})
export class PesquisaProdutoComponent implements OnInit {

  private produtos: Produto[];

  constructor(private produtoServico: ProdutoServico) {
    this.produtoServico.obterTodosProdutos()
      .subscribe(
        produtos => {
          this.produtos = produtos;
        },
        err => {
          console.log(err.error);
        }
      );
  }

  ngOnInit(): void {
  }

}
