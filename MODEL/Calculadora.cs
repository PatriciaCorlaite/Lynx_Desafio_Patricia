using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MODEL
{
    public class Calculadora
    {
        public DateTime Data { get; set; }
        public string Nome { get; set; }
        public double PrimeiroValor { get; set; }
        public double SegundoValor { get; set; }
        public char Operador { get; set; }
        public double Resultado { get; set; }
    }
}
