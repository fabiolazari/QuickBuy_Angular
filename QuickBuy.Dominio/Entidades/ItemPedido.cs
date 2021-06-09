using System;

namespace QuickBuy.Dominio.Entidades
{
	public class ItemPedido : Entidade
	{
		public int Id { get; set; }
		public int ProdutoId { get; set; }
		public int Quantidade { get; set; }

		public override void Validate()
		{
			if (ProdutoId == 0)
				AdicionarMensagem("Não foi identificado que a referência de produtos, verifique!");

			if (Quantidade == 0)
				AdicionarMensagem("Por favor, informe a quantidade, não pode estar vazia!");

		}
	}
}
