import React, { useState, useEffect } from "react";

const GitHubUser = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = "https://api.github.com/users/github-john-doe";

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        return response.json();
      })
      .then((data) => {
        setUserData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Chargement...</div>;
  }

  if (error) {
    return <div className="error">Erreur : {error}</div>;
  }

  return (
    <div className="containerfolio">
      <div className="cardportfolio">
        <img src={userData.avatar_url} alt="Avatar" className="avatar" />
        <h1>{userData.login}</h1>
        <p>
          <strong>Nom :</strong> {userData.name}
        </p>
        <p>
          <strong>ID :</strong> {userData.id}
        </p>
        <p>
          <strong>Biographie :</strong> {userData.bio}
        </p>
        <p>
          <strong>URL :</strong>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            {userData.html_url}
          </a>
        </p>
        <p>
          <strong>Followers :</strong> {userData.followers}
        </p>
        <p>
          <strong>Following :</strong> {userData.following}
        </p>
      </div>
    </div>
  );
};

export default GitHubUser;
