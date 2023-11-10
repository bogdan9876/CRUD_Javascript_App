import React from 'react';
import { Link } from 'react-router-dom';

import './catalog.css';
import CatalogFilter from '../CatalogFilter/catalogFilter';
import lamps from '../LampData/lampData';


function Catalog() {
  return (
    <>
      <CatalogFilter />
      <div className="catalog">
        {lamps.map((lamp) => (
          <div key={lamp.id} className="lamp">
            <img src={lamp.image} alt={lamp.title} width="300" height="250"/>
            <h3>{lamp.title}</h3>
            <p>{lamp.description}</p>
            <p><span style={{ fontWeight: 'bold' }}>Price:</span> {lamp.price} uah</p>
            <Link to={`/lamp/${lamp.id}`} className="lamp-link">View more</Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Catalog;
