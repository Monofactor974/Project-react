import { NavLink } from "react-router-dom";

export default function Navliens() {
  const Links = [
    { name: "Accueil", href: "/" },
    { name: "A propos", href: "/" },
    { name: "Services", href: "/" },
    { name: "Me contacter", href: "/Contact" },
    { name: "Mentions légales", href: "/MentionLegales" },
  ];
  const ReaLinks = [
    { name: "Fresh food", href: "https://www.linkedin.com" },
    { name: "Restaurant Akira", href: "https://www.twitter.com" },
    { name: "Espace bien-être", href: "https://www.facebook.com" },
  ];
  const ArticleLinks = [
    { name: "Coder son site en HTML/CSS", href: "https://www.linkedin.com" },
    { name: "Vendre ses produits sur le web", href: "https://www.twitter.com" },
    { name: "Se positionner sur Google", href: "https://www.facebook.com" },
  ];
  return (
    <div>
      <div>
        <div className="footer">
          <h1 className="profil">
            <p className="John">
              John Doe <br />
              <br />
            </p>
            <p className="information">
              40 rue Laure Diebold <br />
              69009 Lyon,France <br />
              Téléphone : 06 20 30 40 50 <br />
            </p>
          </h1>
          <div></div>
          <div className="liens">
            <p>Liens utiles</p>
            {Links.map((link, i) => {
              return (
                <NavLink key={i} to={link.href} className="li-link">
                  {link.name}
                </NavLink>
              );
            })}
          </div>
          <div className="Rea-liens">
            <p>Mes dernières réalisations</p>
            {ReaLinks.map((link, i) => {
              return (
                <NavLink key={i} to={link.href} className="rea-link">
                  {link.name}
                </NavLink>
              );
            })}
          </div>
          <div className="Article-liens">
            <p>Mes derniers articles</p>
            {ArticleLinks.map((link, i) => {
              return (
                <NavLink key={i} to={link.href} className="art-link">
                  {link.name}
                </NavLink>
              );
            })}
          </div>
        </div>
        <div className="basdepage">
          <div className="DesigBy">
            <p>Designed by john Doe</p>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}
