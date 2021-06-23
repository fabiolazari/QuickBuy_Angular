import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../model/usuario";
import { UsuarioServico } from "../../servicos/usuario/usuario.servico";

@Component({
  selector: "cadastro-usuario",
  templateUrl: "./cadastro.usuario.component.html",
  styleUrls: ["./cadastro.usuario.component.css"]
})
export class CadastroUsuarioComponent implements OnInit {

  public usuario: Usuario;
  public ativarSpinner: boolean;
  public mensagem: string;
  public usuarioCadastrado: boolean;

  constructor(private usuarioServico: UsuarioServico) {
  }

  ngOnInit(): void {
    this.usuario = new Usuario();
  }

  public cadastrar() {
    this.ativarSpinner = true;

    this.usuarioServico.cadastrarUsuario(this.usuario)
      .subscribe(
        usuario_json => {
          this.usuarioCadastrado = true;
          this.mensagem = "";
          this.ativarSpinner = false;
        },
        err => {
          this.mensagem = err.error;
          this.ativarSpinner = false;
        }
      );
  }
}
