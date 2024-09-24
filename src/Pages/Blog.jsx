import React from "react";

export default function Blog() {
  return (
    <div className="services-container">
      <h1 className="portfolio-title">THÉMATIQUES</h1>
      <p className="portfolio-subtitle">
        Découvrez nos différentes thématiques d'apprentissage.
      </p>
      <div>
        <div className="card-container-blog1">
          <Card
            image="/code.jpg"
            titre="Coder son site en HTML/CSS"
            description="Apprenez à créer des sites web en utilisant HTML et CSS."
            link="https://example.com/html-css"
          />
          <Card
            image="/money.jpg"
            titre="Vendre ses produits sur le web"
            description="Stratégies pour vendre efficacement vos produits en ligne."
            link="https://example.com/vendre-sur-web"
          />
          <Card
            image="/ordinateur.jpg"
            titre="Se positionner sur Google"
            description="Techniques pour améliorer votre positionnement dans les résultats de recherche."
            link="https://example.com/se-positionner-google"
          />
        </div>
      </div>
      <div className="card-container-blog2">
        <Card
          image="/Macbook.jpg"
          titre="Coder en responsive design"
          description="Créer des sites web qui s'adaptent à tous les écrans."
          link="https://example.com/responsive-design"
        />
        <Card
          image="seo-immobilier.jpg"
          titre="Techniques de référencement"
          description="Optimisez votre site pour les moteurs de recherche avec des techniques de référencement."
          link="https://example.com/techniques-referencement"
        />
        <Card
          image="/Joomla.png"
          titre="Apprendre à coder"
          description="Introduction aux concepts fondamentaux du codage."
          link="https://example.com/apprendre-a-coder"
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
          <p className="card-footer-text">Publier le 07/09/2024</p>
        </div>
      </div>
    </div>
  );
}
