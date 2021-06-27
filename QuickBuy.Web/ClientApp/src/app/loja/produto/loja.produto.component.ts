import { Component, OnInit } from "@angular/core";
import { Produto } from "../../model/Produto";
import { ProdutoServico } from "../../servicos/produto/produto.servico";

@Component({
  selector: "app-loja-produto",
  templateUrl: "./loja.produto.component.html",
  styleUrls: ["./loja.produto.component.css"]
})

export class LojaProdutoComponent implements OnInit {

  private produto: Produto;

  ngOnInit(): void {
    var produtoDetalhe = sessionStorage.getItem('produtoDetalhe');
    if (produtoDetalhe) {
      this.produto = JSON.parse(produtoDetalhe);
    }
  }

  constructor(private produtoServico: ProdutoServico) {

  }

}
