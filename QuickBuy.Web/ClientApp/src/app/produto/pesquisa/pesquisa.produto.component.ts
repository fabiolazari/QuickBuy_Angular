import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Produto } from "../../model/Produto";
import { ProdutoServico } from "../../servicos/produto/produto.servico";

@Component({
  selector: "pesquisa-produto",
  templateUrl: "./pesquisa.produto.component.html",
  styleUrls: ["./pesquisa.produto.component.css"]
})
export class PesquisaProdutoComponent implements OnInit {

  private produtos: Produto[];

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

  ngOnInit(): void {
  }

  public adicionarProduto() {
    sessionStorage.setItem('produtoSession', "");
    this.router.navigate(['/produto']);
  }

  public deletarProduto(produto: Produto) {
    var retorno = confirm("Deseja realmente deletar o produto selecionado ?");
    if (retorno == true) {
      this.produtoServico.deletar(produto).subscribe(
        produtos => {
          this.produtos = produtos;
          //console.log(produtos);
        }, e => {
          console.log(e.errors);
        });
    }
  }

  public editarProduto(produto: Produto) {
    sessionStorage.setItem('produtoSession', JSON.stringify(produto));
    this.router.navigate(['/produto']);
  }
}
