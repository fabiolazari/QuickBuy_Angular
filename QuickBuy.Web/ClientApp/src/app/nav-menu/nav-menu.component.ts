import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LojaCarrinhoCompras } from '../loja/carrinho-compras/loja.carrinho.compras';
import { UsuarioServico } from '../servicos/usuario/usuario.servico';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  isExpanded = false;
  public carrinhoCompra: LojaCarrinhoCompras;

  get usuario() {
    return this.usuarioServico.usuario;
  }

  constructor(private router: Router, private usuarioServico: UsuarioServico) {
  }

  ngOnInit(): void {
    this.carrinhoCompra = new LojaCarrinhoCompras();
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  public usuarioLogado(): boolean {
    //var usuarioLogado = sessionStorage.getItem("usuario-autenticado");
    //if (usuarioLogado == "1") {
    //  return true;
    //}
    //return false;

    //return sessionStorage.getItem("usuario-autenticado") == "1";

    return this.usuarioServico.usuario_autenticado();
  }

  public usuario_administrador(): boolean {
    return this.usuarioServico.usuario_administrador();
  }

  sair() {
    this.usuarioServico.limpar_sessao();
    //sessionStorage.setItem("usuario-autenticado", "");
    this.router.navigate(['/']);
  }

  public temItensCarrinhoCompras(): boolean {
    return this.carrinhoCompra.temItensCarrinhoCompras();
  }

}
