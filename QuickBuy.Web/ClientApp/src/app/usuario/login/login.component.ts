import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../model/usuario";
import { ActivatedRoute, Router } from "@angular/router";
import { UsuarioServico } from "../../servicos/usuario/usuario.servico";
import { error } from "console";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})

export class LoginComponent implements OnInit {
  public usuario;
  public returnUrl: string;
  //public usuarioAutenticado: boolean;
  //public usuarios = ["usuario1", "usuario2", "usuario3", "usuario4", "usuario5"];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private usuarioServico: UsuarioServico) {
  }

  ngOnInit() : void {
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'];
    this.usuario = new Usuario();
  }

  entrar() {

    this.usuarioServico.verificarUsuario(this.usuario)
      .subscribe(
      data => {

      },
      error = > {

      }
    );

    /*if (this.usuario.email == "fabio@gmail.com" && this.usuario.senha == "123456") {
      sessionStorage.setItem("usuario-autenticado", "1");
      this.router.navigate([this.returnUrl]);
    }*/
  }
}




