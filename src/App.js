import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import ListarProductos from './components/productos/ListarProductos';
import CarritoCompras from "./components/productos/CarritoCompras";

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <div className="logo">
            Fruver JX2
          </div>
          <ul className="menu-items">
            <li>
              <Link to="/clientes/productos">Listar Productos</Link>
            </li>
            <li>
              <Link to="/clientes/carrito">Carrito</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/clientes/productos" element={<ListarProductos />} />
          <Route path="/clientes/carrito" element={<CarritoCompras />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
