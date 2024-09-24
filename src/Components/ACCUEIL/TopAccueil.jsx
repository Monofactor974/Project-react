import { NavLink } from "react-router-dom";

export default function TopAccueil() {
  return (
    <div className="top-accueil">
      <img src="/codeur.jpg" alt="imageCodeur"></img>
      <div className="presentation">
        <h1>Bonjour, je suis John Doe</h1>
        <h2>Développeur web full stack</h2>
        <div className="ensavoirplus">
          <NavLink to="/portfolio" className="nav-link">
            En savoir plus
          </NavLink>
        </div>
      </div>
    </div>
  );
}
