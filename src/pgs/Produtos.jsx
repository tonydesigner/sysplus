import { useEffect, useState } from "react";
import { ComVisual } from "./ComVisual";

export function Produtos() {
  const [prod, setProd] = useState([]);
  const [search, setSearch] = useState();

  useEffect(() => {
    fetch(`https://produtos.asdesigner.repl.co`)
      .then((res) => res.json())
      .then((result) => {
        setProd(result);
      });
  });

  const produto = (e) => {
    e.preventDefault()
      prod.map((i) => {
        if (search == i.prod || search == i.cod) {
          $('.produto').html(`
            <h2>
              ${i.quant} ${i.prod} - ${i.medida} - ${"R$ " + i.val.toFixed(2)}
            </h2>        
        `);
        }
      });
    
  };

  return (
    <div className="prod">
      <h1>Produtos</h1>
      <form>
        <input
          type="text"
          placeholder="Digite o código ou o produto"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" hidden onClick={produto}></button>
      </form>
      <div className="produto"></div>
      <hr />
      <div>
        <ComVisual />
      </div>
    </div>
  );
}
