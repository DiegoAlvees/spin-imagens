import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Header from "./components/Header";
import Clientes from "./pages/Clientes"
import Feedback from "./pages/Feedback";
// import Contato from "./pages/Contato"
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="clientes" element={<Clientes />} />
        <Route path="feedback" element={<Feedback />} />
      </Routes>
    </BrowserRouter>
  );
}
