using Microsoft.AspNetCore.Mvc;
using QuickBuy.Dominio.Contratos;
using QuickBuy.Dominio.Entidades;
using System;

namespace QuickBuy.Web.Controllers
{
	[Route("api/[Controller]")]
	public class PedidoController : Controller
	{
		private readonly IPedidoRepositorio _pedidoRepositorio;

		public PedidoController(IPedidoRepositorio pedidoRepositorio)
		{
			_pedidoRepositorio = pedidoRepositorio;
		}

		[HttpPost]
		public IActionResult Post([FromBody] Pedido pedido)
		{
			try
			{
				this._pedidoRepositorio.Adicionar(pedido);
				return Ok(pedido.Id);
			}
			catch (Exception ex)
			{
				return BadRequest(ex.ToString());
			}
		}
	}
}
