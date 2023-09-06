import { useState } from "react";

export function ComVisual() {
  const [altura, setAltura] = useState();
  const [largura, setLargura] = useState();
  const [quant, setQuant] = useState();
  const [select, setSelect] = useState();
  const calcula = (e) => {
    e.preventDefault();
    const exibe = $(".resultado");
    const valLona = 77;
    const valAdesivo = 147;
    const valTecido = 120;

    const quadrado = parseFloat(altura * largura) * quant;

    if (select == 1) {
      const result = valLona * parseFloat(altura * largura * quant);
      exibe.html(`
            <h2>${"R$ " + result.toFixed(2)} </h2>
            <h3>${quadrado + "m²"} </h3>
       `);
    }
    if (select == 2) {
      const result = valAdesivo * parseFloat(altura * largura * quant);
      exibe.html(`
            <h2>${"R$ " + result.toFixed(2)} </h2>
            <h3>${quadrado + "m²"} </h3>
       `);
    }
    if (select == 3) {
      const result = valTecido * parseFloat(altura * largura * quant);
      exibe.html(`
            <h2>${"R$ " + result.toFixed(2)} </h2>
            <h3>${quadrado + "m²"} </h3>
       `);
    }
  };
  return (
    <div className="comVisual">
      <h1>Comunicação Visual</h1>
      <form>
        <select value={select} onChange={(e) => setSelect(e.target.value)}>
          <option value="1">Lona</option>
          <option value="2">Adesivo</option>
          <option value="3">Tecido</option>
        </select>
        <input
          type="text"
          placeholder="Altura"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
        <input
          type="text"
          placeholder="Largura"
          value={largura}
          onChange={(e) => setLargura(e.target.value)}
        />
        <input
          type="text"
          placeholder="Quant"
          value={quant}
          onChange={(e) => setQuant(e.target.value)}
        />
        <button onClick={calcula}></button>
      </form>
      <div className="resultado"></div>
    </div>
  );
}
