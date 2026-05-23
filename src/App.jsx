import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Nosotros from './pages/Nosotros.jsx';
import Productos from './pages/Productos.jsx';
import Disenador from './pages/Disenador.jsx';
import Servicios from './pages/Servicios.jsx';
import Contacto from './pages/Contacto.jsx';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-background text-on-background">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/diseñador" element={<Disenador />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
