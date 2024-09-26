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
            date="Publié le 22 août 2022 " // Ajout de la propriété date
          />
          <Card
            image="/money.jpg"
            titre="Vendre ses produits sur le web"
            description="Stratégies pour vendre efficacement vos produits en ligne."
            link="https://example.com/vendre-sur-web"
            date="Publié le 20 août 2022" // Ajout de la propriété date
          />
          <Card
            image="/ordinateur.jpg"
            titre="Se positionner sur Google"
            description="Techniques pour améliorer votre positionnement dans les résultats de recherche."
            link="https://example.com/se-positionner-google"
            date="Publié le 1 août 2022 " // Ajout de la propriété date
          />
        </div>
      </div>
      <div className="card-container-blog2">
        <Card
          image="/Macbook.jpg"
          titre="Coder en responsive design"
          description="Créer des sites web qui s'adaptent à tous les écrans."
          link="https://example.com/responsive-design"
          date="Publié le 31 juillet 2022" // Ajout de la propriété date
        />
        <Card
          image="/seo-immobilier.jpg"
          titre="Techniques de référencement"
          description="Optimisez votre site pour les moteurs de recherche avec des techniques de référencement."
          link="https://example.com/techniques-referencement"
          date="Publié le 30 juillet 2022" // Ajout de la propriété date
        />
        <Card
          image="/Joomla.png"
          titre="Apprendre à coder"
          description="Introduction aux concepts fondamentaux du codage."
          link="https://example.com/apprendre-a-coder"
          date="Publié le 12 juillet 2022" // Ajout de la propriété date
        />
      </div>
    </div>
  );
}

function Card({ image, titre, description, link, date }) {
  // Ajout de la propriété date
  return (
    <div className="card-service-blog">
      <div className="card-blog">
        <img src={image} className="card-img-top" alt={titre} />
        <div className="card-body-blog">
          <h2>{titre}</h2>
          <p className="card-text-bog">{description}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="card-button-blog"
          >
            Lire la suite
          </a>
        </div>
        <div className="date-container">
          <p className="card-footer-text">{date}</p>
        </div>
      </div>
    </div>
  );
}
