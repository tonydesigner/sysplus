import { useState } from "react";

export function Recibo() {
  const [num, setNum] = useState();
  const [val, setVal] = useState();
  const [name, setName] = useState();
  const [ext, setExt] = useState();
  const [sgraf, setSgraf] = useState();

  const lg = { display: "flex", flexDirection: "row", alignItems: "center" };

  const exibe = (e) => {
    e.preventDefault();

    var date = new Date();
    $(".num").append(`
            ${num}
        `);
    const mes = date.getMonth() + 1;
    $(".dia").append(`
        ${date.getDate() + "/0" + mes + "/" + date.getFullYear()}
    `);
    const valor = parseFloat(val);
    $(".val").append(`
            R$ ${valor.toFixed(2)}
        `);
    $(".nome").append(`
            ${name}
        `);
    $(".valorExt").append(`
            ${ext}
        `);
    $(".servGraf").append(`
        ${sgraf}
    `);
    $(".mostra").show();
  };
	const h1={textAlign:'center'}
  return (
    <div className="recibo">
	<h1 style={h1}>Gerador de Recibo</h1>
      <form>
        <input
          type="text"
          placeholder="Nº"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
        <input
          type="text"
          placeholder="Valor"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <input
          type="text"
          placeholder="Cliente"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Valor por extenso"
          value={ext}
          onChange={(e) => setExt(e.target.value)}
        />

        <input
          className="campoServ"
          type="text"
          placeholder="Descrição do Serviço"
          value={sgraf}
          onChange={(e) => setSgraf(e.target.value)}
        />
        <button type="submit" hidden onClick={exibe}></button>
      </form>
      <div className="mostra">
        <h1>RECIBO</h1>
        <div className="topoRecibo margin">
          <span className="num">Nº:</span>
          <span className="dia">Data: </span>
          <span className="val">Valor: </span>
        </div>
        <div className="baseRecibo">
          Recebi de
          <span className="nome"></span>a importância de #
          <span className="valorExt"></span> #<br />
          Referente a <span className="servGraf"></span>
        </div>
        <div className="diaRecibo space">
          <p style={lg}>
            <img src="./logoR.png" alt="" />
            <span>
              Rondinelle Serviços Gráficos <p>21 96436-1752</p>
            </span>
          </p>
          <div className="ass">
            <img src="./02.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
