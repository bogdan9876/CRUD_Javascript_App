import React, { useState } from 'react';
import './CatalogFilter.css';
import SelectSort from './selectSort';

const sortOptions = [
  { value: 'sortByPrice', label: 'Sort by price' },
  { value: 'sortByTitle', label: 'Sort by title' },
];

const idOptions = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
];

const priceOptions = [
  { value: '500', label: 'Up to 500 uah' },
  { value: '501-1000', label: '501 - 1000 uah' },
  { value: '1001+', label: '1001 uah and above' },
];

const CatalogFilter = ({ onApplyFilters }) => {
  const [sort, setSort] = useState('');
  const [id, setId] = useState('');
  const [price, setPrice] = useState('');

  const handleApply = () => {
    onApplyFilters({ sort, id, price });
  };

  return (
    <div className="wrapper">
      <div className="inner">
        <SelectSort name="sort" options={sortOptions} onChange={(e) => setSort(e.target.value)} />
        <SelectSort name="id" options={idOptions} onChange={(e) => setId(e.target.value)} />
        <SelectSort name="price" options={priceOptions} onChange={(e) => setPrice(e.target.value)} />
        <button className="myButton" onClick={handleApply}>
          <span>Apply</span>
        </button>
      </div>
    </div>
  );
};

export default CatalogFilter;
