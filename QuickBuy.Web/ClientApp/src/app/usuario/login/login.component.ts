import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../model/usuario";
import { ActivatedRoute, Router } from "@angular/router";
import { UsuarioServico } from "../../servicos/usuario/usuario.servico";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})

export class LoginComponent implements OnInit {
  public usuario;
  public returnUrl: string;
  public mensagem: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
          private usuarioServico: UsuarioServico) {
  }

  ngOnInit(): void {
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'];
    this.usuario = new Usuario();
  }

  entrar() {

    this.usuarioServico.verificarUsuario(this.usuario)
      .subscribe(
        data => {
          // Essa linha será executada no caso de retorno sem erro
          console.log(data);
          var usuarioRetorno: Usuario;
          usuarioRetorno = data;
          sessionStorage.setItem("usuario-autenticado", "1");
          sessionStorage.setItem("email-usuario", usuarioRetorno.email);

          if (this.returnUrl == null) {
            this.router.navigate(['/']);
          } else {
            this.router.navigate([this.returnUrl]);
          }
        },
        err => {
          this.mensagem = err.error;
        }
      );
  }
}
