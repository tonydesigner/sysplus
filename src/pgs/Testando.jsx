import { useState } from "react";

export function Testando() {
  const form = { width: "100%", padding: "1rem" };
  const campo = { width: "100%", padding: ".5rem", margin: "1rem 0  " };
  const saida = { color: "#fff", padding: "1rem" };
  const txt = { textAlign: "center", color: "#fff" };

  const [item, setItem] = useState();
  var dados = [];
  const cadastra = (e) => {
    e.preventDefault();
    if (localStorage.cad) {
      dados = JSON.parse(localStorage.getItem("cad"));
    }
    let newItem = item
    dados.push(newItem)
    localStorage.cad = JSON.stringify(dados);
    alert('cadastrado com sucesso!')
  };

  const mostra = (e) => {
    e.preventDefault();
    let result = $(".saida");
    let total = 0;
    if (localStorage.cad) {
      dados = JSON.parse(localStorage.getItem("cad"));
    }

    for (var i in dados) {
      result.append(`
        <p>${dados[i]}</p>
      `);
      var tot = (total += parseFloat(dados[i]));
      $(".rodape").html("Total <b>RECEITA:</b> R$ " + tot.toFixed(2));
    }
  };

  return (
    <div className="componente brd">
      <div className="cubo tpo brd"></div>
      <div className="cubo base brd"></div>
      <div className="cubo assaid brd">
        <h1 style={txt}>Cadastrar Receitas</h1>
        <form style={form}>
          <input
            
            style={campo}
            type="text"
            placeholder="Digite o valor"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            required
          />
          <button style={campo} onClick={cadastra}>
            Cadastra
          </button>
          <button style={campo} onClick={mostra}>
            Consulta
          </button>
        </form>
      </div>
      <div style={saida} className="cubo saida brd"></div>
      <div className="cubo rodape brd"></div>
    </div>
  );
}
