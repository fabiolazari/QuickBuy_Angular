using QuickBuy.Dominio.ObjetoDeValor;
using System;
using System.Collections.Generic;
using System.Linq;

namespace QuickBuy.Dominio.Entidades
{
	public class Pedido : Entidade
	{
		public int Id { get; set; }
		public DateTime DataPedido { get; set; }
		public int UsuarioId { get; set; }
		public virtual Usuario Usuario { get; set; }
		public DateTime DataPrevisaoEntrega { get; set; }
		public string CEP { get; set; }
		public string Estado { get; set; }
		public string Cidade { get; set; }
		public string EnderecoCompleto { get; set; }
		public int NumeroEndereco { get; set; }
		public int FormaPagamentoId { get; set; }
		public virtual FormaPagamento FormaPagamento { get; set; }

		public virtual ICollection<ItemPedido> ItensPedido { get; set; }

		public override void Validate()
		{
			LimparMensagensValidacao();

			if (!ItensPedido.Any())
				AdicionarMensagem("Critica: Pedido sem itens, verifique");

			if (string.IsNullOrEmpty(CEP))
				AdicionarMensagem("CEP inválido, favor preencher");

			if (FormaPagamentoId == 0)
				AdicionarMensagem("Não foi informada a forma de pagamento, verifique");
		}
	}
}
