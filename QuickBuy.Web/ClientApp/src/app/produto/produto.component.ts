import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Produto } from "../model/Produto";
import { ProdutoServico } from "../servicos/produto/produto.servico";

@Component({
  selector: "app-produto",
  templateUrl: "./produto.component.html",
  styleUrls: ["./produto.component.css"]
})

export class ProdutoComponent implements OnInit {

  public produto: Produto;
  public arquivoSelecionado: File;
  public ativarSpinner: boolean;
  public mensagem: string;

  constructor(private produtoServico: ProdutoServico, private router: Router) {
  }
  
  ngOnInit(): void {
    var produtoSession = sessionStorage.getItem('produtoSession');
    if (produtoSession) {
      this.produto = JSON.parse(produtoSession);
    } else {
      this.produto = new Produto();
    }
  }

  public cadastrar() {

    this.ativarEspera();
    this.produtoServico.cadastrar(this.produto)
      .subscribe(
        produtoJson => {
          console.log(produtoJson);
          this.desativarEspera();
          this.router.navigate(['/pesquisar-produto']);
        },
        err => {
          console.log(err.error);
          this.mensagem = err.error;
          this.desativarEspera();
        }
      );
  }

  public inputChange(files: FileList) {

    this.ativarEspera();
    this.arquivoSelecionado = files.item(0);

    this.produtoServico.enviarArquivo(this.arquivoSelecionado)
      .subscribe(
        nomeArquivo => {
          this.produto.nomeArquivo = nomeArquivo;
          this.desativarEspera();
        },
        err => {
          console.log(err.error);
          this.desativarEspera();
        }
      );
  }

  public ativarEspera() {
    this.ativarSpinner = true;
  }

  public desativarEspera() {
    this.ativarSpinner = false;
  }
}
