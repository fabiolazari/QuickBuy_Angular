using System.Collections.Generic;

namespace QuickBuy.Dominio.Entidades
{
	public class Usuario : Entidade
	{
		public int Id { get; set; }
		public string Email { get; set; }
		public string Senha { get; set; }
		public string Nome { get; set; }
		public string SobreNome { get; set; }
		public bool EhAdministrador { get; set; }

		public virtual ICollection<Pedido> Pedidos { get; set; }

		public override void Validate()
		{
			if (string.IsNullOrEmpty(Email))
				AdicionarMensagem("O campo e-mail deve ser informado, verifique");

			if (string.IsNullOrEmpty(Senha))
				AdicionarMensagem("Senha não informada, verifique");
		}
	}
}
