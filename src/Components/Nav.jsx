import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const Links = [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/Realisation" },
    { name: "Realisation", href: "/Services" },

    { name: "Blog", href: "/Blog" },
    { name: "Me contacter", href: "/Contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("Menu toggled:", !isOpen); // Ajoutez cette ligne pour déboguer
  };

  return (
    <div className="nav">
      <NavLink to="/" className="navNom">
        JOHN DOE
      </NavLink>

      <div className={`navLinks ${isOpen ? "open" : ""}`}>
        {Links.map((link, i) => (
          <NavLink
            key={i}
            to={link.href}
            className="nav-link"
            onClick={() => setIsOpen(false)} // Ferme le menu lorsque le lien est cliqué
          >
            {link.name}
          </NavLink>
        ))}
      </div>
      <div className="burger-menu" onClick={toggleMenu}>
        {isOpen ? (
          <FiX size={24} color="white" />
        ) : (
          <FiMenu size={24} color="white" />
        )}
      </div>
    </div>
  );
}
