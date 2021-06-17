using Microsoft.AspNetCore.Mvc;
using QuickBuy.Dominio.Entidades;
using System;

namespace QuickBuy.Web.Controllers
{
	[Route("api/[Controller]")]
	public class UsuarioController : Controller
	{
		[HttpGet]
		public ActionResult Get()
		{
			try
			{
				return Ok();
			}
			catch (Exception ex)
			{
				return BadRequest(ex.ToString());
			}
		}

		[HttpPost]
		public ActionResult Post()
		{
			try
			{
				return Ok();
			}
			catch (Exception ex)
			{
				return BadRequest(ex.ToString());
			}
		}

		[HttpPost("VerificarUsuario")]
		public ActionResult VerificarUsuario([FromBody] Usuario usuario)
		{
			try
			{
				if (usuario.Email == "fabio@gmail.com" && usuario.Senha == "123456") 
					return Ok(usuario);

				return BadRequest("Usuário ou senha inválidos!");
			}
			catch (Exception ex)
			{
				return BadRequest(ex.ToString());
			}
		}
	}
}
