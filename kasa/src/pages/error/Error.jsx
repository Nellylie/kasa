import { Link } from 'react-router-dom';
// affichage de la page d'erreur 404
function Error () {
  const error = "oups ! La page que vous demandez n'existe pas";
  const back = "Retourner sur la page d'accueil";
  // "Link to" permet de créer un lien vers la page d'accueil
  return (
    <div className="error-section">
        <h1>404</h1>
        <h2>{error}</h2>
        <div className="linkBack">
            <Link to= {'/' } className="error-back">{back}
            </Link>
        </div>
    </div>
  );
}

export default Error;
