import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Produto } from "../../model/Produto";

@Injectable({
  providedIn: "root"
})
export class ProdutoServico {

  private baseURL: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseURL = baseUrl;
  }

  public cadastrar(produto: Produto): Observable<Produto> {
    const headers = new HttpHeaders().set('Accept', 'application/json')

    var body = {
      nome: produto.nome,
      descricao: produto.descricao,
      preco: produto.preco
    }

    return this.http.post<Produto>(this.baseURL + "api/produto/cadastrar", body, { headers });
  }

  public salvar(produto: Produto): Observable<Produto> {
    const headers = new HttpHeaders().set('Accept', 'application/json')

    var body = {
      nome: produto.nome,
      descricao: produto.descricao,
      preco: produto.preco
    }

    return this.http.post<Produto>(this.baseURL + "api/produto/salvar", body, { headers });
  }

  public deletar(produto: Produto): Observable<Produto> {
    const headers = new HttpHeaders().set('Accept', 'application/json')

    var body = {
      nome: produto.nome,
      descricao: produto.descricao,
      preco: produto.preco
    }

    return this.http.post<Produto>(this.baseURL + "api/produto/deletar", body, { headers });
  }
}
