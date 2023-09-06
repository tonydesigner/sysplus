
import { useEffect } from "react";
import { Link } from "react-router-dom";

const clicado = () => {
  window.location.href = "/test";
};

const recibo = () => {
  window.location.href = "/recibo";
};



const mostra = $(".le");
var dados = [];
let total = 0;
dados = JSON.parse(localStorage.getItem("cad"));
localStorage.cad = JSON.stringify(dados)
setTimeout(()=>{
  for (var i in dados) {
    mostra.append(`
      <p>${dados[i]}</p>
    `);
    var tot = (total += parseFloat(dados[i]));
    $(".le").html("Total <br /> <b>RECEITA:</b><br /> R$ " + tot.toFixed(2));
  }

},100)
  







export function Home() {
  return (
    
    <div className="home">
     
      <div className="box cima margin">
        <div className="caixa center brd">
          <Link to="/" className="link">
            Clientes
          </Link>
        </div>
        <div className="caixa center brd">
          <Link to="/recibo" className="link">
            Gerador de Recibo
          </Link>
        </div>

        <div className="caixa center">Financeiro</div>
      </div>
      <div className="box lateral">Tarefas</div>
      <Link to="/test" className="link">
        <div className="box  le"></div>
      </Link>

      <div className="box  meio">Despesas</div>
      <div className="box fim">Mensagem do dia</div>
    </div>
  );
}
