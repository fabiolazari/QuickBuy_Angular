import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Produto } from "../../model/Produto";
import { ProdutoServico } from "../../servicos/produto/produto.servico";
import { LojaCarrinhoCompras } from "../carrinho-compras/loja.carrinho.compras";

@Component({
  selector: "app-loja-produto",
  templateUrl: "./loja.produto.component.html",
  styleUrls: ["./loja.produto.component.css"]
})

export class LojaProdutoComponent implements OnInit {

  public produto: Produto;
  public carrinhoCompras: LojaCarrinhoCompras;

  ngOnInit(): void {
    this.carrinhoCompras = new LojaCarrinhoCompras();
    var produtoDetalhe = sessionStorage.getItem('produtoDetalhe');
    if (produtoDetalhe) {
      this.produto = JSON.parse(produtoDetalhe);
    }
  }

  constructor(private produtoServico: ProdutoServico, private router: Router) {
  }

  comprar() {
    this.carrinhoCompras.adicionar(this.produto);
    this.router.navigate(['/loja-efetivar']);
  }
}
