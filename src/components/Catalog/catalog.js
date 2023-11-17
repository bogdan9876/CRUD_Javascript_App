import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CatalogFilter from '../CatalogFilter/catalogFilter';
import './catalog.css';

function Catalog({ searchTerm }) {
  const [filteredLamps, setFilteredLamps] = useState([]);
  const [lamps, setLamps] = useState([
    {
      id: 1,
      image: "images/section2(1).jpg",
      title: " Electro1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: 1000
    },
    {
      id: 2,
      image: "images/section2(2).jpg",
      title: "Wood1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: 1500
    },
    {
      id: 3,
      image: "images/section2(3).jpg",
      title: "Wood2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: 5000
    },
    {
      id: 4,
      image: "images/section2(4).jpg",
      title: "Electro2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: 1200
    },
  ]);
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
