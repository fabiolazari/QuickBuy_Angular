using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBuy.Dominio.Entidades;
using System;

namespace QuickBuy.Repositorio.Config
{
	public class ItemPedidoConfiguration : IEntityTypeConfiguration<ItemPedido>
	{
		public void Configure(EntityTypeBuilder<ItemPedido> builder)
		{
			builder.HasKey(p => p.Id);

			builder
				.Property(p => p.ProdutoId)
				.IsRequired();
			builder
				.Property(p => p.Quantidade)
				.IsRequired();

			builder.ToTable("ItemPedido");
		}
	}
}
