import { Component } from "@angular/core";

@Component({
  selector: "app-produto",
  template: "<html><body>Nome Produto: {{ obterNome() }}</body></html>"
})

export class ProdutoComponent { //Nome classe com maíusculo - PascalCase

  // padrão camelCase para variáveis atributos e funções
  public nome: string;
  public liberadoParaVenda: boolean;

  public obterNome() : string {
    return "Samsung";
  }


}
