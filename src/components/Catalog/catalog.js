import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CatalogFilter from '../CatalogFilter/catalogFilter';
import lamps from '../LampData/lampData';
import './catalog.css';

function Catalog({ searchTerm }) {
  const [filteredLamps, setFilteredLamps] = useState([]);
  const [sort, setSort] = useState('');
  const [idOption, setIdOption] = useState('');
  const [price, setPrice] = useState('');

  const applyFilters = () => {
    let filtered = lamps.filter((lamp) =>
      lamp.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    if (sort === 'sortByPrice') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sort === 'sortByTitle') {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    }
  
    if (idOption === '1') {
      filtered = filtered.filter((lamp) => lamp.id < 2);
    } else if (idOption === '2') {
      filtered = filtered.filter((lamp) => lamp.id >= 3 && lamp.id <= 4);
    }
  
    if (price !== '') {
      const [minPrice, maxPrice] = price.split('-').map(Number);
      filtered = filtered.filter((lamp) => {
        const lampPrice = parseInt(lamp.price, 10);
        return lampPrice >= minPrice && (maxPrice ? lampPrice <= maxPrice : true);
      });
    }
  
    setFilteredLamps(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [sort, idOption, price, searchTerm]);

  const handleApplyFilters = (filters) => {
    setSort(filters.sort);
    setIdOption(filters.idOption);
    setPrice(filters.price);
  };

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
