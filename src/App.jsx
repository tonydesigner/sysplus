import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Finan } from "./pgs/Finan";
import { Home } from "./pgs/Home";
import { Menu } from "./pgs/Menu";
import { Teste } from "./pgs/Teste";
import { Produtos } from "./pgs/Produtos";
import { Testando } from "./pgs/Testando";
import { Recibo } from "./pgs/Recibo";
import { Convert } from "./pgs/Convert";

function App() {
  return (
    <Router>
      <div className="container center">
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/finan" element={<Finan />} />
          <Route path="/teste" element={<Teste />} />
          <Route path="/prod" element={<Produtos />} />
          <Route path="/test" element={<Testando />} />
          <Route path="/recibo" element={<Recibo />} />
          <Route path="/convert" element={<Convert />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
