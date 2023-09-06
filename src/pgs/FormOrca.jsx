import { useEffect, useState } from "react";
import { Topo } from "../components/Topo";
var total = 0;
export function FormOrca() {
  const [num, setNum] = useState("");
  const [quant, setQuant] = useState("");
  const [desc, setDesc] = useState("");
  const [val, setVal] = useState("");
  const caixa = { height: "auto", textAlign: "center" };
  const topo = { height: "auto", width: "750px", margin: "1rem auto" };
  const btn = { border: "0" };
  const campo = { width: "30%" };
  const h2 = { margin: "0 2rem" };

  const [client, setClient] = useState();
  const [cli, setCli] = useState([]);
  useEffect(() => {
    fetch("https://cadcli.asdesigner.repl.co")
      .then((res) => res.json())
      .then((result) => {
        setCli(result);
      });
  });

  var date = new Date();
  const mes = date.getMonth();

  const alerta = (e) => {
    e.preventDefault();
    const caixa = $("#i");
    caixa.html(`
        	<h2>Orçamento nº: ${num} </h2>
            <h3> Data: ${date.getDate()}/0${mes + 1}/${date.getFullYear()} </h3>
            <p>Validade de 7 dias.</p>     
            </div>
        `);
    $(".numero").hide();
    $(".orcado").css("display", "flex");
    $(".result").show();
    $(".topo").css("display", "flex");
    $(".cliente").show();
    $(".pag").css("display", "flex");
    $('.btn').css('display','block')
    return false;
  };

  const abreFecha = () => {
    $(".campos").toggle();
  };

  const orcar = (e) => {
    e.preventDefault();

    var subtotal = quant * val;
    var valor = parseFloat(val);

    $(".orcado table").append(`
            <tr><td>${quant} </td><td>${desc} </td><td class="vuni">R$ ${valor.toFixed(
      2
    )} </td><td>R$ ${subtotal.toFixed(2)} </td></tr>
        `);
    var tot = (total += quant * val);
    $(".result strong").html("R$ " + tot.toFixed(2));
  };
  const cliente = (e) => {
    e.preventDefault();
    cli.map((i) => {
      if (client == i.cod || client == i.tel) {
        $(".cliCad").html(`
                    <h3>Cliente: ${i.nome} </h3>
                    <p>Telefone: ${i.tel}</p>
                `);
        $(".cliente").hide();
      }
    });
    return false;
  };

  return (
    <>
      <div className="form">
        <Topo />
        <form>
          <input
            style={campo}
            type="text"
            placeholder="Digite o Nº do Orçamento"
            className="numero"
            value={num}
            onChange={(e) => setNum(e.target.value)}
          />
          <button onClick={alerta} hidden>
            Acessar
          </button>
        </form>
        <div style={caixa}>
          <form className="cliente">
            <input
              type="text"
              value={client}
              onChange={(e) => setClient(e.target.value)}
              placeholder="Digite o Código ou Nome do Cliente"
            />
            <button type="submit" onClick={cliente} hidden></button>
          </form>
          <div className="cliCad"></div>
        </div>
        <hr />
        <div style={topo} id="i" className="margin"></div>
        <hr />
        <span onClick={abreFecha} className="btn">
          +
        </span>
        <div className="campos">
          <form action="">
            <input
              type="text"
              placeholder="quant"
              value={quant}
              onChange={(e) => setQuant(e.target.value)}
            />
            <input
              type="text"
              style={campo}
              placeholder="Descrição"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <input
              type="text"
              placeholder="Valor"
              value={val}
              onChange={(e) => setVal(e.target.value)}
            />
            <button style={btn} onClick={orcar} hidden></button>
          </form>
        </div>
      </div>

      <div className="orcado center">
        <table>
          <tr className="tableTHeader">
            <td>Quant</td>
            <td className="meio">Descrição</td>
            <td className="vuni">Valor Uni.</td>
            <td>Total</td>
          </tr>
        </table>
      </div>
      <hr />
      <div className="result">
        <strong></strong>
      </div>
      <hr />
      <div className="pag center">
        <div className="forma">
          <h2>Formas de Pagamento</h2>
          <p>50% no ato da aprovação deste Orçamento</p>
          <p>50% no ato da Entrega</p>
          <img src="./01.png" alt="PIX" /> <h2>Solcite a Chave Pix</h2>
        </div>
        <div className="entrega">
          <h3>Prazo de Entrega</h3>
          <p>À Combinar</p>
          <img src="./02.png" alt="assinatura" />
        </div>
      </div>
    </>
  );
}
