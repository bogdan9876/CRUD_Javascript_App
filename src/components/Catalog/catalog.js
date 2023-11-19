import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CatalogFilter from '../CatalogFilter/catalogFilter';
import Loader from '../Loader/loader';
import axios from 'axios';
import './catalog.css';

function Catalog({ searchTerm }) {
  const [filteredLamps, setFilteredLamps] = useState([]);
  const [sort, setSort] = useState('');
  const [idOption, setIdOption] = useState('');
  const [price, setPrice] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const applyFilters = () => {
    setIsLoading(true);
    axios.get('http://localhost:8080/api/lamps/filtered', {
      params: {
        searchTerm,
        sort: sort || null,
        idOption: idOption || null,
        price: price || null,
      }
    })
      .then(response => {
        setFilteredLamps(response.data);
      })
      .catch(error => {
        console.error('P', error);
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      });

  };

  useEffect(() => {
    applyFilters();
  }, []);

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
      {isLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Loader />
        </div>
      ) : (
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
      )}
    </>
  );
}

export default Catalog;
