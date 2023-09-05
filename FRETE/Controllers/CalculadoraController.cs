using Microsoft.AspNetCore.Mvc;
using MODEL;
using System;

namespace MinhaApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CalculadoraController : ControllerBase
    {
        [HttpPost]
        public IActionResult Post([FromBody] Calculadora calculadora)
        {
            double resultado = RealizarOperacao(calculadora);
            calculadora.Resultado = resultado;
            return Ok(calculadora);
        }

        private double RealizarOperacao(Calculadora calculadora)
        {
            double resultado = 0;

            switch (calculadora.Operador)
            {
                case '+':
                    resultado = calculadora.PrimeiroValor + calculadora.SegundoValor;
                    break;
                case '-':
                    resultado = calculadora.PrimeiroValor - calculadora.SegundoValor;
                    break;
                case '*':
                    resultado = calculadora.PrimeiroValor * calculadora.SegundoValor;
                    break;
                case '/':
                    resultado = calculadora.PrimeiroValor / calculadora.SegundoValor;
                    break;
                default:
                    break;
            }

            return resultado;
        }
        private readonly Random _random = new Random();

        [HttpGet]
        public IActionResult Get()
        {
            int randomNumber = _random.Next(1, 100);
            return Ok(randomNumber);
        }
    }
}
