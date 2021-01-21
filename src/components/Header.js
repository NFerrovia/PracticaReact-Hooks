import React from 'react';
import Link from './Link';

// Creación de un Header que unifique las redirecciones, se utiliza Link para no perder
// la información ya cargada en la pagina navegando entre subpaginas cuyos datos ya se
// encuentran cargados en el navegador.

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">
        Menú Acordeon
      </Link>
      <Link href="/dropdown" className="item">
        Menú Desplegable
      </Link>
      <Link href="/list" className="item">
        Búsqueda en Wiki
      </Link>
      <Link href="/translate" className="item">
        Traductor
      </Link>
    </div>
  );
};

export default Header;
