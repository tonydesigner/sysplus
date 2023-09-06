import { useState, useEffect } from "react";

export function Teste() {
  const [clientes, setClientes] = useState(0);
  const [projetos, setProjetos] = useState(0);
  const [vendas, setVendas] = useState(0);

  useEffect(() => {
    if (clientes < 85) {
      setTimeout(() => {
        setClientes(clientes + 1);
      }, 5);
    }
    if (projetos < 45) {
      setTimeout(() => {
        setProjetos(projetos + 1);
      }, 5);
    }
    if (vendas < 6) {
      setTimeout(() => {
        setVendas(vendas + 1);
      }, 5);
    }
  });

  return (
    <div className="teste margin">
      <div className="dados">
        <h3>CLIENTES CADASTRADOS</h3>
        <h1> {clientes} </h1>
      </div>
      <div className="dados">
        <h3>PROJETOS</h3>
        <h1> {projetos} </h1>
      </div>
      <div className="dados">
        <h3>VENDAS 2023</h3>
        <h1> {vendas} </h1>
      </div>
    </div>
  );
}
