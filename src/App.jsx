import "./styles/style.css";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Accueil from "./Pages/Accueil";
import Contact from "./Pages/Contact";
import MentionLegales from "./Pages/MentionLegales";
import Services from "./Pages/Services";
import Blog from "./Pages/Blog";
import Portfolio from "./Pages/Portfolio";
import Realisation from "./Pages/realisations";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/MentionLegales" element={<MentionLegales />} />
        <Route path="/Realisation" element={<Realisation />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
