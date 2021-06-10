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

			builder.HasOne(ip => ip.Pedido)
				   .WithMany(p => p.ItensPedido)
			       .HasForeignKey(ip => ip.PedidoId)
			       .HasPrincipalKey(p => p.Id);

			builder.ToTable("ItemPedido");
		}
	}
}
