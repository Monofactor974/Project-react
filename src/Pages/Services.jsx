import React from "react";

export default function Services() {
  return (
    <div className="services-container">
      <img src="/fond02.jpg" alt="Background" className="background-image" />
      <h1 className="portfolio-title">PORTFOLIO</h1>
      <p className="portfolio-subtitle">
        Voici quelques-unes de mes réalisations.
      </p>
      <hr className="divider" />
      <div className="card-container">
        <Card
          image="/Freshfood.jpg"
          titre="Fresh food"
          description="Réalisation d'un site avec commande en ligne."
          link="https://example.com/freshfood"
          footerText="Site réalisé avec PHP et MySQL" // Ajout de la propriété footerText
        />
        <Card
          image="/sushis.jpg"
          titre="Restaurant Akira"
          description="Réalisation d'un site vitrine."
          link="https://example.com/akira"
          footerText="Site réalisé avec WordPress" // Ajout de la propriété footerText
        />
        <Card
          image="/buddha.jpg"
          titre="Espace bien-etre"
          description="Réalisation d'un site vitrine pour un praticien de bien-être."
          link="https://example.com/jjoidjoipq"
          footerText="Site réalisé en HTML/CSS" // Ajout de la propriété footerText
        />
      </div>
    </div>
  );
}

function Card({ image, titre, description, link, footerText }) {
  // Ajout de la propriété footerText
  return (
    <div className="card-service">
      <div className="card">
        <img src={image} className="card-img-top" alt={titre} />
        <div className="card-body">
          <h2>{titre}</h2>
          <p className="card-text">{description}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="card-button-realisation"
          >
            Voir
          </a>
        </div>
        <div className="card-footer">
          <p className="card-footer-text">{footerText}</p>{" "}
          {/* Utilisation de footerText ici */}
        </div>
      </div>
    </div>
  );
}
