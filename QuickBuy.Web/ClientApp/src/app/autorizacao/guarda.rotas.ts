import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { UsuarioServico } from "../servicos/usuario/usuario.servico";

@Injectable({
  providedIn: 'root'
})
export class GuadaRotas implements CanActivate {
  
  constructor(private router: Router, private usuarioServico: UsuarioServico) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {

    if (this.usuarioServico.usuario_autenticado()) {
      return true;
    }
    this.router.navigate(['/entrar'], { queryParams: { returnUrl: state.url } });

    return false;
  }
}
