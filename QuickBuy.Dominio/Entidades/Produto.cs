﻿using System;

namespace QuickBuy.Dominio.Entidades
{
	public class Produto : Entidade
	{
		public int Id { get; set; }
		public string Nome { get; set; }
		public string Descricap { get; set; }
		public decimal Preco { get; set; }

		public override void Validate()
		{
			throw new NotImplementedException();
		}
	}
}
