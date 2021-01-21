// Siendo esta app una práctica de hooks, el import también agrega useState para poder hacer uso del mismo.

import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

// Esta app contiene varias prácticas diferentes de menús, a continuación se encuentra la información hard coded de
// algunos de ellos en arrays.

const items = [
  {
    title: '¿Que es React?',
    content:
      'React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. ',
  },
  {
    title: '¿Porque usar React?',
    content:
      'Sirve para desarrollar aplicaciones web de una manera más ordenada y con menos código que si usas Javascript puro o librerías como jQuery centradas en la manipulación del DOM. Permite que las vistas se asocien con los datos, de modo que si cambian los datos, también cambian las vistas.',
  },
  {
    title: '¿Que son los Hooks en React?',
    content:
      'Hooks son una nueva característica en React 16.8. Estos te permiten usar el estado y otras características de React sin escribir una clase.',
  },
];

const options = [
  {
    label: 'Fondo Rojo',
    value: 'red',
  },
  {
    label: 'Fondo Verde',
    value: 'green',
  },
  {
    label: 'Fondo Azul',
    value: 'blue',
  },
];

// a travéz de hooks es posible reemplazar las funciones de clases de la siguiente manera, sin necesidad
// de definir ciclos.

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  const color = selected.value;

  // a continuación, se utilizan hacen uso de todos los componentes creados en la carpeta "components",
  // para crear un div limpio y entendible debajo de un mismo header que contiene todos los mismos y
  // permite la navegación entre los mismos.

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Selecciona un color de fondo del menú"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />{' '}
        <div
          style={{
            // utilizando template literals para la interpolación de una variable dentro de un campo que requiere
            // un string.

            backgroundColor: `${color}`,
            width: '1000px',
            height: '1000px',
          }}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
