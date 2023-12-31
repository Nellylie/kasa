import { useState } from 'react';
// affichage du composant "Collapse" qui permet d'afficher ou de masquer une description
function Collapse ({ title, description }) {
  const [isDisplayed, setIsDisplayed] = useState(false);

  return <div className="collapse-module">
    <button className="collapse-trigger" onClick={() => setIsDisplayed(!isDisplayed)} >{title}
      <div className="arrow">
        {/* si "isDisplayed" est vrai, on affiche la flèche vers le haut, sinon on affiche la flèche vers le bas */}
        {isDisplayed
          ? (<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="rgb(255,255,255)"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" /></svg>)
          : (<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="rgb(255,255,255)"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>)}
      </div>
    </button>
    {isDisplayed && <div className="collapse-open">{
      /* si la description est un tableau, on affiche chaque élément du tableau dans une liste */
      Array.isArray(description)
        ? (description.map((text) => (
          <li key={description.indexOf(text)}>{text}</li>)))
        : (<p>{description}</p>)
    }</div>}</div>;
}

export default Collapse;
