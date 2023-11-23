import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import CatalogFilter from '../CatalogFilter/catalogFilter';
import Loader from '../Loader/loader';
import { getFilteredLamps } from '../../api';
import './catalog.css';

function Catalog({ searchTerm }) {
  const [filteredLamps, setFilteredLamps] = useState([]);
  const [sort, setSort] = useState('');
  const [idOption, setIdOption] = useState('');
  const [price, setPrice] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const hasMounted = useRef(false);

  const applyFilters = async () => {
    setIsLoading(true);
    try {
      const data = await getFilteredLamps({ searchTerm, sort, idOption, price });
      setFilteredLamps(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      applyFilters();
    };

    if (hasMounted.current) {
      fetchData();
    } else {
      hasMounted.current = true;
    }

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
