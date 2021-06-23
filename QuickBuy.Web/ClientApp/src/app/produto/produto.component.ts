import { Component, OnInit } from "@angular/core";
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

  constructor(private produtoServico: ProdutoServico) {
  }
  
  ngOnInit(): void {
    this.produto = new Produto();
  }

  public cadastrar() {
    this.produtoServico.cadastrar(this.produto)
      .subscribe(
        produtoJson => {
          console.log(produtoJson);
        },
        err => {
          console.log(err.error);
        }
      );
  }

  public inputChange(files: FileList) {

    this.ativarSpinner = true;
    this.arquivoSelecionado = files.item(0);
    this.produtoServico.enviarArquivo(this.arquivoSelecionado)
      .subscribe(
        nomeArquivo => {
          this.produto.nomeArquivo = nomeArquivo;
          this.ativarSpinner = true;
        },
        err => {
          console.log(err.error);
        }
      );
  }
}
