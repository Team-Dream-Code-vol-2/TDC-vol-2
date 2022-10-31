import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import ListarProductos from './pages/ListarProductos';
import ListarVentas from './pages/ListarVentas';
import CarritoCompras from "./pages/CarritoCompras";
import VerProducto from "./pages/VerProducto";
import FormularioProducto from "./pages/FormularioProducto";

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
              <Link to="/productos">Productos</Link>
            </li>
            <li>
              <Link to="/ventas">Ventas</Link>
            </li>
            <li>
              <Link to="/admins/productos">Admin Productos</Link>
            </li>
            <li>
              <Link to="/carrito">Carrito</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/ventas" element={<ListarVentas />} />
          <Route path="/productos" element={<ListarProductos />} />
          <Route path="/admins/productos" element={<ListarProductos rol="admin" />} />
          <Route path="/productos/crear" element={<FormularioProducto />} />
          <Route path="/productos/:id" element={<VerProducto />} />
          <Route path="/productos/:id/editar" element={<FormularioProducto />} />
          <Route path="/carrito" element={<CarritoCompras />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
