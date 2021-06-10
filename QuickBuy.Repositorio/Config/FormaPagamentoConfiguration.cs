using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBuy.Dominio.ObjetoDeValor;
using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Repositorio.Config
{
	public class FormaPagamentoConfiguration : IEntityTypeConfiguration<FormaPagamento>
	{
		public void Configure(EntityTypeBuilder<FormaPagamento> builder)
		{
			builder.HasKey(p => p.Id);

			builder
				.Property(p => p.Nome)
				.IsRequired()
				.HasMaxLength(20)
				.HasColumnType("nvarchar");
			builder
				.Property(p => p.Descricao)
				.IsRequired()
				.HasMaxLength(50)
				.HasColumnType("nvarchar");

			//builder.ToTable("FormaPagamento");
		}
	}
}
