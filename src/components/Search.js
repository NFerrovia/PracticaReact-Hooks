import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  // setup del primer uso, con la palabra programación como el default para la primera búsqueda.

  const [term, setTerm] = useState('Programación');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  // más ejemplos de tiempo de gracia para empezar la busqueda, de esta manera reduciendo la cantidad
  // de solicitudes de red creadas.

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      // especificaciones de la documentación requerida por el API de wikipedia.

      const { data } = await axios.get('https://es.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm,
        },
      });

      setResults(data.query.search);
    };
    search();
  }, [debouncedTerm]);

  // setup para abrir el resultado de busqueda seleccionado en una nueva ventana, con
  // este setup en vez de utilizar "_blank" en href se previenen algunos incumplimientos
  // de seguridad posibles.

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <div
            onClick={() =>
              openInNewTab(`https://es.wikipedia.org?curid=${result.pageid}`)
            }
            className="ui button"
          >
            Ir
          </div>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Ingresa un término de búsqueda</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
