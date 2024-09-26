import React from "react";

export default function Services() {
  return (
    <div className="services-container">
      <h1 className="portfolio-title">Mon OFFRES DE SERVICES</h1>
      <p className="portfolio-subtitle">
        Voici les prestations sur lesquelles je peux intervenir.
      </p>
      <div className="card-container">
        <Card
          image="desktop-solid.svg"
          titre="UX DESIGN"
          description={
            <>
              <strong>L'UX Design</strong> est une méthode de conception centrée
              sur l'utilisation. Son but est d'offrir une expérience de
              navigation optimale à l'internaute...
            </>
          }
          link="https://example.com/freshfood"
        />
        <Card
          image="/file-solid.svg"
          titre="DEVELOPPEMENT WEB"
          description={
            <>
              <strong>Le développement de site web</strong> repose sur
              l'utilisation des langages{" "}
              <a
                href="https://developer.mozilla.org/fr/docs/Web/HTML"
                target="_blank"
                rel="noopener noreferrer"
              >
                HTML
              </a>
              ,{" "}
              <a
                href="https://developer.mozilla.org/fr/docs/Web/CSS"
                target="_blank"
                rel="noopener noreferrer"
              >
                CSS
              </a>
              ,{" "}
              <a
                href="https://developer.mozilla.org/fr/docs/Web/JavaScript"
                target="_blank"
                rel="noopener noreferrer"
              >
                JavaScript
              </a>{" "}
              et{" "}
              <a
                href="https://www.php.net/"
                target="_blank"
                rel="noopener noreferrer"
              >
                PHP
              </a>
              .
            </>
          }
          link="https://example.com/akira"
        />
        <Card
          image="/magnifying-glass-dollar-solid.svg"
          titre="REFERENCEMENT"
          description={
            <>
              <strong>Le référencement naturel d'un site</strong>, aussi appelé
              SEO, consiste à mettre en œuvre des techniques pour{" "}
              <em>améliorer sa position</em> dans les résultats des moteurs de
              recherche.
            </>
          }
          link="https://example.com/jjoidjoipq"
        />
      </div>
    </div>
  );
}

function Card({ image, titre, description, link }) {
  return (
    <div className="card-service-realisation">
      <div className="card-realisation">
        <img src={image} className="card-img-realisation" alt={titre} />
        <div className="card-body-realisation">
          <h2>{titre}</h2>
          <p className="card-text-realisation">{description}</p>
        </div>
        <div className="card-footer-realisation"></div>
      </div>
    </div>
  );
}
