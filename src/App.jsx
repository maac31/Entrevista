import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Contacto from "./routes/Contacto";
import Footer from "./components/Footer";
import Inicio from "./components/Inicio";
import Agente from "./routes/Agente";
import Director from "./routes/Director";
import Presidente from "./routes/Presidente";
import Camionero from "./routes/Camionero";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Agente" element={<Agente />} />
        <Route path="/Director" element={<Director />} />
        <Route path="/Presidente" element={<Presidente />} />
        <Route path="/Camionero" element={<Camionero />} />
        <Route path="/Contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
