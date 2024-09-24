export default function apropos() {
  return (
    <div className="apropos">
      <div>
        <h1>A propos</h1>
        <hr />
        <h2>
          Passionné par l'informatique et les nouvelles technologies, j'ai suivi
          une formation d'intégrateur-développeur web au CEF. Au cours de cette
          formation, j'ai pu acquérir des base solides pour travailler dans le
          domaine du développement web.
          <br />
          <br />
          Basé à Lyon, je suis en recherche d'une aternace au sein d'unea gence
          digitale pour consolider ma formation de développeur wev full stack.
          <br />
          <br />
          j'accorde une attention particulière à la qualité du code que j'écris
          et je respecte les bonnes pratiques du web.
        </h2>
      </div>
      <div>
        <div className="presentation"></div>
        <img src="/codeur2.jpg" alt="imagecodeur2"></img>
        <h2>Mes competences</h2>
        <section>
          <p>HTML 90%</p>
          <div className="container">
            <div className="skills html"></div>
          </div>

          <p>CSS3 80%</p>
          <div className="container">
            <div className="skills css"></div>
          </div>

          <p>JAVASCRIPT 70%</p>
          <div className="container">
            <div className="skills javascprit"></div>
          </div>

          <p>PHP 60%</p>
          <div className="container">
            <div className="skills php"></div>
          </div>

          <p>REACT 50%</p>
          <div className="container">
            <div className="skills react"></div>
          </div>
        </section>
      </div>
    </div>
  );
}
