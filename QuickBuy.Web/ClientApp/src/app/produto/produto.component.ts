import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-produto",
  templateUrl: "./produto.component.html",
  styleUrls: ["./produto.component.css"]
})

export class ProdutoComponent { //Nome classe com maíusculo - PascalCase

  // padrão camelCase para variáveis atributos e funções
  public nome: string;
  public liberadoParaVenda: boolean;



}
