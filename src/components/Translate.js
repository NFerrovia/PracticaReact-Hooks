import React, { useState } from 'react';
import Dropdown from './Dropdown';

// import de el componente Convert donde se configura y utiliza el APi de traducción.

import Convert from './Convert';

// especificaciones de la documentación requerida por google para el API de traducción.

const options = [
  {
    label: 'English',
    value: 'en',
  },
  {
    label: 'Afrikaans',
    value: 'af',
  },
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
  {
    label: 'Español',
    value: 'es',
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Ingresa texto a traducir</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown // reutilización del componente de menu desplegable como un subcomponente en esta aplicación para elegir el idioma a traducir.
        label="Selecciona un idioma"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr />
      <h3 className="ui header">Resultado:</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
