import React from 'react';

import './catalog.css';


const lamps = [
  {
    id: 1,
    image: "images/section2(1).jpg",
    title: "Лампа 1",
    description: "Це опис першої лампи."
  },
  {
    id: 2,
    image: "images/section2(2).jpg",
    title: "Лампа 2",
    description: "Це опис другої лампи."
  },
  {
    id: 3,
    image: "images/section2(2).jpg",
    title: "Лампа 3",
    description: "Це опис третьої лампи."
  },
  {
    id: 4,
    image: "images/section2(1).jpg",
    title: "Лампа 4",
    description: "Це опис четвертої лампи."
  }
];

function Catalog() {
  return (
    <div className="catalog">
      {lamps.map((lamp) => (
        <div key={lamp.id} className="lamp">
          <img src={lamp.image} alt={lamp.title} width="300" height="250"/>
          <h3>{lamp.title}</h3>
          <p>{lamp.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Catalog;
