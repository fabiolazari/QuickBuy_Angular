using QuickBuy.Dominio.Contratos;
using QuickBuy.Dominio.ObjetoDeValor;
using QuickBuy.Repositorio.Contexto;

namespace QuickBuy.Repositorio.Repositorios
{
	public class FormaPagamentoRepositorio : BaseRepositorio<FormaPagamento>, IFormaPagamentoRepositorio
	{
		public FormaPagamentoRepositorio(QuickBuyContexto quickBuyContexto) : base(quickBuyContexto)
		{
		}
	}
}
