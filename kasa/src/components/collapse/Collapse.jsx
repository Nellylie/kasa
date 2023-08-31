import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Collapse ({ title, description }) {
  const [isDisplayed, setIsDisplayed] = useState(false);

  return <div className="collapse-module">
      <button className="collapse-trigger" onClick={() => setIsDisplayed(!isDisplayed)} >{title}
        <div className="arrow">
          {isDisplayed ? (<FontAwesomeIcon icon={faChevronUp} />) : (<FontAwesomeIcon icon={faChevronDown} />)}
        </div>
      </button>
      {isDisplayed && <div className="collapse-open">{
        Array.isArray(description)
          ? (description.map((text) => (
            <li key={description.indexOf(text)}>{text}</li>)))
          : (<p>{description}</p>)
      }</div>}</div>;
}

export default Collapse;
