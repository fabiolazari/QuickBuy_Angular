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
  private ativarSpinner: boolean;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
          private usuarioServico: UsuarioServico) {
  }

  ngOnInit(): void {
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'];
    this.usuario = new Usuario();
  }

  entrar() {

    this.ativarSpinner = true;

    this.usuarioServico.verificarUsuario(this.usuario)
      .subscribe(
        usuario_json => {
          // Essa linha será executada no caso de retorno sem erro
          //var usuarioRetorno: Usuario;
          //usuarioRetorno = data;
          //sessionStorage.setItem("usuario-autenticado", "1");
          //sessionStorage.setItem("email-usuario", usuarioRetorno.email);

          this.usuarioServico.usuario = usuario_json;

          if (this.returnUrl == null) {
            this.router.navigate(['/']);
          } else {
            this.router.navigate([this.returnUrl]);
          }
        },
        err => {
          console.log("Error: " + err.error);
          this.mensagem = err.error;
          this.ativarSpinner = false;
        }
      );
  }
}
