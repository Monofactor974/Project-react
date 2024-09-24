import React from "react";

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>ME CONTACTER</h1>
        <p>
          Pour me contacter en vue d'un entretien ou d'une future collaboration,
          merci de remplir le formulaire de contact.
        </p>
      </div>
      <hr className="contact-divider" />
      <div className="contact-content">
        <div className="contact-info">
          <Form />
        </div>
        <div className="contact-details">
          <div className="contact-address">
            <h2>Mes coordonnées</h2>
            <p>40 Rue Laure Diebold, 69009 Lyon, France</p>
            <p>06 20 30 40 50</p>
          </div>
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6269657541047!2d4.796403976619983!3d45.7786657124015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1725896001778!5m2!1sfr!2sfr"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

function Form() {
  return (
    <form action="" className="contact-form">
      <h2>Formulaire de contact</h2>
      <div className="form-group">
        <input type="text" id="votreNom" placeholder="Votre Nom" required />
        <input
          type="text"
          id="email"
          placeholder="Votre adresse email"
          required
        />
        <input
          type="text"
          id="numero"
          placeholder="Votre numéro de téléphone"
          required
        />
        <input type="text" id="sujet" placeholder="Sujet" required />
        <textarea
          required
          name="message"
          id="message"
          placeholder="Votre message"
        ></textarea>
        <input
          type="submit"
          value="Envoyer"
          id="button"
          className="submit-button"
        />
      </div>
    </form>
  );
}
