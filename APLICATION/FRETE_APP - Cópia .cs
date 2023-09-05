using System;
using System.Collections.Generic;
using REPOSITORY;
using MODEL;

namespace APLICATION
{
    public class FRETE_APP
    {
        FRETE_REP objFreteRep = new FRETE_REP();
        #region CALCULAR FRETE JADLOG
        public FRETE_MODEL.CalcularFRETE CalculoFreteJadLog(int cep, List<FRETE_MODEL.ProdutosNota> produtos, double valornota, double peso, List<FRETE_MODEL.FaixaCepJADLOG> tabelafaixacep, List<FRETE_MODEL.FretePesoJADLOG> tabelafretepeso)
        {
            string redespacho = "";
            double gris = 0;
            int prazo = 0;
            string tarifa = "";
            string estado = "";
            string frap = "";
            foreach (FRETE_MODEL.FaixaCepJADLOG coluna in tabelafaixacep)
            {
                if (cep >= coluna.cepinicio && cep <= coluna.cepfim)
                {
                    redespacho = coluna.redespacho;
                    gris = coluna.gris;
                    prazo = coluna.prazorodo;
                    tarifa = coluna.tarifa;
                    estado = coluna.estado;
                    frap = coluna.frap;
                }
            }
            double adicional = 0;
            double tarifapeso = 0;
            foreach (FRETE_MODEL.FretePesoJADLOG coluna in tabelafretepeso)
            {
                if (coluna.Estado == estado && coluna.Tarifa == tarifa)
                {
                    int pesoaredondado = (int)Math.Ceiling(peso);
                    if (peso > 30)
                    {
                        pesoaredondado = 30;
                    }
                    if (peso < 1)
                    {
                        if (peso <= 0.250)
                        {
                            tarifapeso = coluna.peso250;
                        }
                        else if (peso > 0.250 && peso <= 0.500)
                        {
                            tarifapeso = coluna.peso500;
                        }
                        else if (peso > 0.500 && peso <= 0.750)
                        {
                            tarifapeso = coluna.peso750;
                        }
                        else
                        {
                            tarifapeso = coluna.peso1;
                        }
                    }
                    else
                    {
                        switch (pesoaredondado)
                        {
                            case 1:
                                tarifapeso = coluna.peso1;
                                break;
                            case 2:
                                tarifapeso = coluna.peso2;
                                break;
                            case 3:
                                tarifapeso = coluna.peso3;
                                break;
                            case 4:
                                tarifapeso = coluna.peso4;
                                break;
                            case 5:
                                tarifapeso = coluna.peso5;
                                break;
                            case 6:
                                tarifapeso = coluna.peso6;
                                break;
                            case 7:
                                tarifapeso = coluna.peso7;
                                break;
                            case 8:
                                tarifapeso = coluna.peso8;
                                break;
                            case 9:
                                tarifapeso = coluna.peso9;
                                break;
                            case 10:
                                tarifapeso = coluna.peso10;
                                break;
                            case 11:
                                tarifapeso = coluna.peso11;
                                break;
                            case 12:
                                tarifapeso = coluna.peso12;
                                break;
                            case 13:
                                tarifapeso = coluna.peso13;
                                break;
                            case 14:
                                tarifapeso = coluna.peso14;
                                break;
                            case 15:
                                tarifapeso = coluna.peso15;
                                break;
                            case 16:
                                tarifapeso = coluna.peso16;
                                break;
                            case 17:
                                tarifapeso = coluna.peso17;
                                break;
                            case 18:
                                tarifapeso = coluna.peso18;
                                break;
                            case 19:
                                tarifapeso = coluna.peso19;
                                break;
                            case 20:
                                tarifapeso = coluna.peso20;
                                break;
                            case 21:
                                tarifapeso = coluna.peso21;
                                break;
                            case 22:
                                tarifapeso = coluna.peso22;
                                break;
                            case 23:
                                tarifapeso = coluna.peso23;
                                break;
                            case 24:
                                tarifapeso = coluna.peso24;
                                break;
                            case 25:
                                tarifapeso = coluna.peso25;
                                break;
                            case 26:
                                tarifapeso = coluna.peso26;
                                break;
                            case 27:
                                tarifapeso = coluna.peso27;
                                break;
                            case 28:
                                tarifapeso = coluna.peso28;
                                break;
                            case 29:
                                tarifapeso = coluna.peso29;
                                break;
                            case 30:
                                tarifapeso = coluna.peso30;
                                adicional = coluna.KgAdicional;
                                break;
                        }
                    }
                }
            }
            if (peso >= 30)
            {
                adicional = (peso - 30) * adicional;
            }
            tarifapeso = tarifapeso + adicional;
            if (redespacho == "Fluvial")
            {
                gris = valornota * 0.08;
            }
            else
            {
                gris = valornota * (gris / 100);
            }
            double icms = 0.88;
            double adicionaltarifa = 0;
            if (produtos.Count >= 6 || peso >= 50)
            {
                adicionaltarifa = 43.50;
            }
            double ValorFrete = (tarifapeso + gris + adicionaltarifa) / icms;
            FRETE_MODEL.CalcularFRETE objCalcularFrete = new FRETE_MODEL.CalcularFRETE();
            objCalcularFrete.PrazoEntrega = prazo;
            objCalcularFrete.ValorFrete = ValorFrete;
            objCalcularFrete.Tarifa = tarifa;
            objCalcularFrete.Estado = estado;
            objCalcularFrete.Transportadora = "000284";
            return objCalcularFrete;
        }
        #endregion
        #region CALCULAR FRETE JAMEF
        public FRETE_MODEL.CalcularFRETE CalculoFreteJamef(int cep, List<FRETE_MODEL.ProdutosNota> produtos, double valornota, double peso, List<FRETE_MODEL.FaixaCepJAMEF> tabelafaixacep, List<FRETE_MODEL.FretePesoJAMEF> tabelafretepeso)
        {
            int Codigo = 0;
            string MunicipioDestino = "";
            string Ufd = "";
            string FilialDestino = "";
            string AtendidoJamef = "";
            string Tipo = "";
            string Seg = "";
            string Ter = "";
            string Quar = "";
            string Quin = "";
            string Sex = "";
            int PrazoTotal = 0;
            foreach (FRETE_MODEL.FaixaCepJAMEF coluna in tabelafaixacep)
            {
                if (cep >= coluna.MinimoCep && cep <= coluna.MaxCep)
                {
                    Codigo = coluna.Codigo;
                    MunicipioDestino = coluna.MunicipioDestino;
                    Ufd = coluna.Ufd;
                    FilialDestino = coluna.FilialDestino;
                    AtendidoJamef = coluna.AtendidoJamef;
                    Tipo = coluna.Tipo;
                    Seg = coluna.Seg;
                    Ter = coluna.Ter;
                    Quar = coluna.Quar;
                    Quin = coluna.Quin;
                    Sex = coluna.Sex;
                    PrazoTotal = coluna.PrazoTotal;
                }
            }
            double advalorem = 0;
            double adicional = 0;
            double tarifapeso = 0;
            foreach (FRETE_MODEL.FretePesoJAMEF coluna in tabelafretepeso)
            {
                if (coluna.Estado == Ufd && coluna.Tarifa == Tipo)
                {
                    int pesoaredondado = (int)Math.Ceiling(peso);
                    pesoaredondado = (Convert.ToInt32(pesoaredondado.ToString().Substring(0, 1)) + 1) * 10;
                    if (peso >= 100)
                    {
                        pesoaredondado = 100;
                    }
                    if (peso < 10)
                    {
                        pesoaredondado = 10;
                    }
                    switch (pesoaredondado)
                    {
                        case 10:
                            tarifapeso = coluna.peso10;
                            break;
                        case 20:
                            tarifapeso = coluna.peso20;
                            break;
                        case 30:
                            tarifapeso = coluna.peso30;
                            break;
                        case 40:
                            tarifapeso = coluna.peso40;
                            break;
                        case 50:
                            tarifapeso = coluna.peso50;
                            break;
                        case 60:
                            tarifapeso = coluna.peso60;
                            break;
                        case 70:
                            tarifapeso = coluna.peso70;
                            break;
                        case 80:
                            tarifapeso = coluna.peso80;
                            break;
                        case 100:
                            tarifapeso = coluna.peso80;
                            adicional = coluna.PesoAdicional;
                            break;
                    }
                    advalorem = valornota * (coluna.AdValorem / 100);
                }
            }
            double gris = valornota * (0.12 / 100);
            double pedagio = 0;
            if (peso >= 100)
            {
                pedagio = 7.19;
                pedagio += pedagio * ((peso - 100) / 100);
            }
            double tas = 0;
            if (Ufd != "ES")
            {
                tas = 5.05;
            }
            double taxaporcte = 4.33;
            double emex = 0;
            if (Ufd == "RJ" && Tipo == "CAPITAL")
            {
                emex = valornota * (0.30 / 100);
            }

            if (peso >= 100)
            {
                adicional = (peso - 100) * adicional;
            }
            tarifapeso = tarifapeso + adicional;
            double icms = 0.88;
            double ValorFrete = (tarifapeso + gris + adicional + advalorem + emex + tas + taxaporcte + pedagio) / icms;
            FRETE_MODEL.CalcularFRETE objCalcularFrete = new FRETE_MODEL.CalcularFRETE();
            objCalcularFrete.PrazoEntrega = PrazoTotal;
            objCalcularFrete.ValorFrete = ValorFrete;
            objCalcularFrete.Transportadora = "000370";
            return objCalcularFrete;
        }
        #endregion
        #region CALCULAR FRETE TOTALEXPRESS
        public FRETE_MODEL.CalcularFRETE CalculoFreteTotal(int cep, List<FRETE_MODEL.ProdutosNota> produtos, double valornota, double peso, List<FRETE_MODEL.FaixaCepTOTAL> tabelafaixacep, List<FRETE_MODEL.FretePesoTOTAL> tabelafretepeso)
        {
            string risco = "";
            int prazo = 0;
            string localidadeatendida = "";
            string tipolocalidade = "";
            string geocom = "";
            foreach (FRETE_MODEL.FaixaCepTOTAL coluna in tabelafaixacep)
            {
                if (cep >= coluna.cepinicial && cep <= coluna.cepfinal)
                {
                    risco = coluna.risco;
                    prazo = coluna.prazo;
                    localidadeatendida = coluna.localidadeatendida;
                    tipolocalidade = coluna.tipolocalidade;
                    geocom = coluna.geocom;
                }
            }
            double adicional = 0;
            double tarifapeso = 0;
            foreach (FRETE_MODEL.FretePesoTOTAL coluna in tabelafretepeso)
            {
                if (coluna.Tarifa == geocom)
                {
                    int pesoaredondado = (int)Math.Ceiling(peso);
                    if (peso > 30)
                    {
                        pesoaredondado = 30;
                    }
                    if (peso < 1)
                    {
                        if (peso <= 0.250)
                        {
                            tarifapeso = coluna.peso250;
                        }
                        else if (peso > 0.250 && peso <= 0.00)
                        {
                            tarifapeso = coluna.peso500;
                        }
                        else if (peso > 0.300 && peso <= 0.500)
                        {
                            tarifapeso = coluna.peso500;
                        }
                        else if (peso > 0.500 && peso <= 0.750)
                        {
                            tarifapeso = coluna.peso750;
                        }
                        else
                        {
                            tarifapeso = coluna.peso1;
                        }
                    }
                    else
                    {
                        switch (pesoaredondado)
                        {
                            case 1:
                                tarifapeso = coluna.peso1;
                                break;
                            case 2:
                                tarifapeso = coluna.peso2;
                                break;
                            case 3:
                                tarifapeso = coluna.peso3;
                                break;
                            case 4:
                                tarifapeso = coluna.peso4;
                                break;
                            case 5:
                                tarifapeso = coluna.peso5;
                                break;
                            case 6:
                                tarifapeso = coluna.peso6;
                                break;
                            case 7:
                                tarifapeso = coluna.peso7;
                                break;
                            case 8:
                                tarifapeso = coluna.peso8;
                                break;
                            case 9:
                                tarifapeso = coluna.peso9;
                                break;
                            case 10:
                                tarifapeso = coluna.peso10;
                                break;
                            case 11:
                                tarifapeso = coluna.peso11;
                                break;
                            case 12:
                                tarifapeso = coluna.peso12;
                                break;
                            case 13:
                                tarifapeso = coluna.peso13;
                                break;
                            case 14:
                                tarifapeso = coluna.peso14;
                                break;
                            case 15:
                                tarifapeso = coluna.peso15;
                                break;
                            case 16:
                                tarifapeso = coluna.peso16;
                                break;
                            case 17:
                                tarifapeso = coluna.peso17;
                                break;
                            case 18:
                                tarifapeso = coluna.peso18;
                                break;
                            case 19:
                                tarifapeso = coluna.peso19;
                                break;
                            case 20:
                                tarifapeso = coluna.peso20;
                                break;
                            case 21:
                                tarifapeso = coluna.peso21;
                                break;
                            case 22:
                                tarifapeso = coluna.peso22;
                                break;
                            case 23:
                                tarifapeso = coluna.peso23;
                                break;
                            case 24:
                                tarifapeso = coluna.peso24;
                                break;
                            case 25:
                                tarifapeso = coluna.peso25;
                                break;
                            case 26:
                                tarifapeso = coluna.peso26;
                                break;
                            case 27:
                                tarifapeso = coluna.peso27;
                                break;
                            case 28:
                                tarifapeso = coluna.peso28;
                                break;
                            case 29:
                                tarifapeso = coluna.peso29;
                                break;
                            case 30:
                                tarifapeso = coluna.peso30;
                                adicional = coluna.KgAdicional;
                                break;
                        }
                    }
                }
            }
            if (peso >= 30)
            {
                adicional = (peso - 30) * adicional;
            }
            double precosku = valornota;
            double gris = 0;
            switch (risco)
            {
                case "Padrão":
                    gris = precosku * (0.6 / 100);
                    break;
                case "Alto":
                    gris = precosku * (1.4 / 100);
                    break;
                case "Altíssimo":
                    gris = precosku * (2.4 / 100);
                    break;
            }
            double icms = 0.88;
            double ValorFrete = (tarifapeso + adicional + gris) / icms;
            FRETE_MODEL.CalcularFRETE objCalcularFrete = new FRETE_MODEL.CalcularFRETE();
            objCalcularFrete.PrazoEntrega = prazo;
            objCalcularFrete.ValorFrete = ValorFrete;
            objCalcularFrete.Transportadora = "000273";
            return objCalcularFrete;
        }
        #endregion
        #region CALCULAR FRETE TRANSSCHERRER
        public FRETE_MODEL.CalcularFRETE CalculoFreteTransScherrer(int cep, List<FRETE_MODEL.ProdutosNota> produtos, double valornota, double peso, List<FRETE_MODEL.FAIXA_CEP> tabelafaixacep, List<FRETE_MODEL.FRETE_PESO> tabelafretepeso)
        {
            double gris = 0.66;
            int prazo = 3;
            string sigla = "";
            double adicional = 0;
            double tarifapeso = 0;
            int pesoaredondado = (int)Math.Ceiling(peso);
            pesoaredondado = (Convert.ToInt32(pesoaredondado.ToString().Substring(0, 1)) + 1) * 10;
            if (peso >= 100)
            {
                pesoaredondado = 100;
            }
            if (peso < 10)
            {
                pesoaredondado = 10;
            }
            switch (pesoaredondado)
            {
                case 10:
                    tarifapeso = 22;
                    break;
                case 20:
                    tarifapeso = 24;
                    break;
                case 30:
                    tarifapeso = 28;
                    break;
                case 40:
                    tarifapeso = 30;
                    break;
                case 50:
                    tarifapeso = 37;
                    break;
                case 60:
                    tarifapeso = 39;
                    break;
                case 70:
                    tarifapeso = 42;
                    break;
                case 80:
                    tarifapeso = 45;
                    break;
                case 90:
                    tarifapeso = 54;
                    break;
                case 100:
                    tarifapeso = 56;
                    adicional = 0.45;
                    break;
            }
            if (peso >= 100)
            {
                adicional = (peso - 100) * adicional;
            }
            tarifapeso = tarifapeso + adicional;
            double pedagio = 2.50;
            double taxadespacho = 3;
            gris = valornota * (gris / 100);
            double icms = 0.88;
            double ValorFrete = (tarifapeso + gris + pedagio + taxadespacho) / icms;
            FRETE_MODEL.CalcularFRETE objCalcularFrete = new FRETE_MODEL.CalcularFRETE();
            objCalcularFrete.PrazoEntrega = prazo;
            objCalcularFrete.ValorFrete = ValorFrete;
            objCalcularFrete.Tarifa = sigla;
            objCalcularFrete.Transportadora = "000476";
            return objCalcularFrete;
        }
        #endregion

        #region CAUCULAR CUBAGEM
        public double CalcularPeso_Cubagem(int quantidade, double altura, double largura, double profundidade, double peso)
        {
            double cubagem = (altura * largura * profundidade) * 167;
            if (peso > cubagem)
            {
                return peso * quantidade;
            }
            else
            {
                return cubagem * quantidade;
            }
        }
        #endregion

        #region TABELAS JADLOG
        public List<FRETE_MODEL.FaixaCepJADLOG> tabelafaixacepJADLOG()
        {
            return objFreteRep.BuscarFaixaCepJadLog();
        }
        public List<FRETE_MODEL.FretePesoJADLOG> tabelafretepesoJADLOG()
        {
            return objFreteRep.BuscarFretePesoJadLog();
        }
        #endregion
        #region TABELAS TOTALEXPRESS
        public List<FRETE_MODEL.FaixaCepTOTAL> tabelafaixacepTOTAL()
        {
            return objFreteRep.BuscarFaixaCepTotal();
        }
        public List<FRETE_MODEL.FretePesoTOTAL> tabelafretepesoTOTAL()
        {
            return objFreteRep.BuscarFretePesoTotal();
        }
        #endregion
        #region TABELAS JAMEF
        public List<FRETE_MODEL.FaixaCepJAMEF> tabelafaixacepJAMEF()
        {
            return objFreteRep.BuscarFaixaCepJamef();
        }
        public List<FRETE_MODEL.FretePesoJAMEF> tabelafretepesoJAMEF()
        {
            return objFreteRep.BuscarFretePesoJamef();
        }
        #endregion

        #region TABELAS TRANSPORTADORAS
        public List<FRETE_MODEL.FAIXA_CEP> TabelaFaixaCep(string transportadora)
        {
            return objFreteRep.BuscarFaixaCep(transportadora);
        }
        public List<FRETE_MODEL.FRETE_PESO> TabelaFretePeso(string transportadora)
        {
            return objFreteRep.BuscarFretePeso(transportadora);
        }
        #endregion

        #region RETORNAR DIMENCOES SKU
        public FRETE_MODEL.ProdutosNota BuscarDimensoesSku(string sku)
        {
            return objFreteRep.BuscarDimensoesSku(sku);
        }
        #endregion
    }
}
