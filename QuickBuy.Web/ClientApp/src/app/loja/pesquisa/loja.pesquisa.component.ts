import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Produto } from "../../model/Produto";
import { ProdutoServico } from "../../servicos/produto/produto.servico";

@Component({
  selector: "app-loja",
  templateUrl: "./loja.pesquisa.component.html",
  styleUrls: ["./loja.pesquisa.component.css"]
})

export class LojaPesquisaComponent implements OnInit {

  public produtos: Produto[];

  ngOnInit(): void {
  }

  constructor(private produtoServico: ProdutoServico, private router: Router) {
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

  public abrirProduto(produto: Produto) {
    sessionStorage.setItem('produtoDetalhe', JSON.stringify(produto));
    this.router.navigate(['/loja-produto']);
  }

}
