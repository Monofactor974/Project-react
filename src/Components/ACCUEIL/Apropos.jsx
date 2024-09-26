export default function apropos() {
  return (
    <div className="apropos">
      <div>
        <h1>A propos</h1>
        <hr />
        <h3>
          Passionné par l'informatique et les nouvelles technologies, j'ai suivi
          une formation d'<strong>intégrateur-développeur web</strong> au CEF.
          Au cours de cette formation, j'ai pu acquérir des bases solides pour
          travailler dans le domaine du <strong>développement web</strong>.
          <br />
          <br />
          Basé à Lyon, je suis en recherche d'une alternance au sein d'une
          agence digitale pour consolider ma formation de{" "}
          <strong>développeur web full stack</strong>.
          <br />
          <br />
          J'accorde une attention particulière à la qualité du code que j'écris
          et je respecte les bonnes pratiques du web.
        </h3>
      </div>
      <div>
        <div className="presentation"></div>
        <img src="/codeur2.jpg" alt="imagecodeur2"></img>
        <h2>Mes competences</h2>
        <section>
          <p>HTML 90%</p>
          <div className="containerSkill">
            <div className="skills html"></div>
          </div>

          <p>CSS3 80%</p>
          <div className="containerSkill">
            <div className="skills css"></div>
          </div>

          <p>JAVASCRIPT 70%</p>
          <div className="containerSkill">
            <div className="skills javascprit"></div>
          </div>

          <p>PHP 60%</p>
          <div className="containerSkill">
            <div className="skills php"></div>
          </div>

          <p>REACT 50%</p>
          <div className="containerSkill">
            <div className="skills react"></div>
          </div>
        </section>
      </div>
    </div>
  );
}
