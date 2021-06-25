﻿using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QuickBuy.Dominio.Contratos;
using QuickBuy.Dominio.Entidades;
using System;
using System.IO;
using System.Linq;

namespace QuickBuy.Web.Controllers
{
	[Route("api/[Controller]")]
	public class ProdutoController : Controller
	{
		private readonly IProdutoRepositorio _produtoRepositorio;
		private IHttpContextAccessor _httpContextAccessor;
		private IHostingEnvironment _hostingEnvironment;

		public ProdutoController(IProdutoRepositorio produtoRepositorio, 
								IHttpContextAccessor httpContextAccessor,
								IHostingEnvironment hostingEnvironment)
		{
			_produtoRepositorio = produtoRepositorio;
			_httpContextAccessor = httpContextAccessor;
			_hostingEnvironment = hostingEnvironment;
		}

		[HttpGet]
		public IActionResult Get()
		{
			try
			{
				return Json(_produtoRepositorio.ObterTodos());
			}
			catch (Exception ex)
			{
				return BadRequest(ex.ToString());
			}
		}

		[HttpPost]
		public IActionResult Post([FromBody] Produto produto)
		{
			try
			{
				produto.Validate();

				if(!produto.EhValido)
				{
					return BadRequest(produto.ObterMensagensValidacao());
				}
				_produtoRepositorio.Adicionar(produto);
				return Created("api/produto", produto);
			}
			catch (Exception ex)
			{
				return BadRequest(ex.ToString());
			}
		}

		[HttpPost("EnviarArquivo")]
		public IActionResult EnviarArquivo()
		{
			try
			{
				IFormFile formFile = _httpContextAccessor.HttpContext.Request.Form.Files["arquivoEnviado"];
				string nomeArquivo = formFile.FileName;
				string extensao = nomeArquivo.Split(".").Last();
				string novoNomeArquivo = GerarNovoNomeArquivo(nomeArquivo, extensao);
				string pastaArquivos = _hostingEnvironment.WebRootPath + "\\arquivos\\";
				string nomeComleto = pastaArquivos + novoNomeArquivo;

				using (var streamArquivo = new FileStream(nomeComleto, FileMode.Create))
				{
					formFile.CopyTo(streamArquivo);
				}

				return Json(novoNomeArquivo);
			}
			catch (Exception ex)
			{
				return BadRequest(ex.ToString());
			}
		}

		private static string GerarNovoNomeArquivo(string nomeArquivo, string extensao)
		{
			char[] arrayNomeCompacto = Path.GetFileNameWithoutExtension(nomeArquivo).Take(10).ToArray();
			string novoNomeArquivo = new string(arrayNomeCompacto).Replace(" ", "-");
			novoNomeArquivo = $"{novoNomeArquivo}_{DateTime.Now.Year}{DateTime.Now.Month}{DateTime.Now.Day}{DateTime.Now.Hour}{DateTime.Now.Minute}.{extensao}";
			return novoNomeArquivo;
		}
	}
}
