import {
  BrowserRouter,
  Routes, //"Switch"
  Route,
} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./Page/Home";
import Formulario from "./Page/Formulario";
import ParaDoar from "./Page/ParaDoar";

const Rotas = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Routes>
      <Route path="/formulario" element={<Formulario />} />
    </Routes>
    <Routes>
      <Route path="/paradoar" element={<ParaDoar />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default Rotas;