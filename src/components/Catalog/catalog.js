import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './catalog.css';
import CatalogFilter from '../CatalogFilter/catalogFilter';
import lamps from '../LampData/lampData';

function Catalog({ searchTerm }) {
  const [sort, setSort] = useState('');
  const [id, setId] = useState('');
  const [price, setPrice] = useState('');

  const handleApplyFilters = (filters) => {
    setSort(filters.sort);
    setId(filters.id);
    setPrice(filters.price);
  };

  let filteredLamps = lamps.filter((lamp) => lamp.title.toLowerCase().includes(searchTerm.toLowerCase()));

  if (sort === 'sortByPrice') {
    filteredLamps.sort((a, b) => a.price - b.price);
  } else if (sort === 'sortByTitle') {
    filteredLamps.sort((a, b) => a.title.localeCompare(b.title));
  }

  if (id) {
    filteredLamps = filteredLamps.filter((lamp) => lamp.id === id);
  }

  if (price) {
    filteredLamps = filteredLamps.filter((lamp) => {
      const lampPrice = parseInt(lamp.price, 10);

      if (price === '500') {
        return lampPrice <= 500;
      } else if (price === '501-1000') {
        return lampPrice >= 501 && lampPrice <= 1000;
      } else if (price === '1001+') {
        return lampPrice >= 1001;
      } else {
        return false;
      }
    });
  }

  return (
    <>
      <CatalogFilter onApplyFilters={handleApplyFilters} />
      <div className="catalog">
        {filteredLamps.map((lamp) => (
          <div key={lamp.id} className="lamp">
            <img src={lamp.image} alt={lamp.title} width="300" height="250" />
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
