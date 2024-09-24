import React from "react";

export default function Services() {
  return (
    <div className="services-container">
      <h1 className="portfolio-title">PORTFOLIO</h1>
      <p className="portfolio-subtitle">
        Voici quelques-unes de mes réalisations.
      </p>
      <div className="card-container">
        <Card
          image="/Freshfood.jpg"
          titre="Fresh food"
          description="Réalisation d'un site avec commande en ligne."
          link="https://example.com/freshfood"
        />
        <Card
          image="/sushis.jpg"
          titre="Restaurant Akira"
          description="Réalisation d'un site vitrine."
          link="https://example.com/akira"
        />
        <Card
          image="/buddha.jpg"
          titre="Espace bien-etre"
          description="Réalisation d'un site vitrine pour un patricien de bien-etre."
          link="https://example.com/jjoidjoipq"
        />
      </div>
    </div>
  );
}

function Card({ image, titre, description, link }) {
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
            className="card-button"
          >
            Voir le projet
          </a>
        </div>
        <div className="card-footer">
          <p className="card-footer-text">Site réalisé avec PHP et MySQL</p>
        </div>
      </div>
    </div>
  );
}
