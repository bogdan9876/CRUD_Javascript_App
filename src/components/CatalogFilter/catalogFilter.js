import React, { useState } from 'react';
import SelectSort from './selectSort';
import './CatalogFilter.css';

const sortOptions = [
  { value: '', label: 'Choose option' },
  { value: 'sortByPrice', label: 'Sort by price' },
  { value: 'sortByTitle', label: 'Sort by title' },
];

const idOptions = [
  { value: '', label: 'Choose option' },
  { value: '1', label: 'ID less than 4' },
  { value: '2', label: 'ID between 4 and 6' },
  { value: '3', label: 'ID more than 6' },
];

const priceOptions = [
  { value: '', label: 'Choose option' },
  { value: '0-500', label: 'Up to 500 uah' },
  { value: '501-1000', label: '501 - 1000 uah' },
  { value: '1001-2000', label: '1001 - 2000 uah' },
  { value: '2001-10000', label: '2001 uah to 10000'},
  { value: '10001-100000', label: '10001 uah and above'},
];

const CatalogFilter = ({ onApplyFilters }) => {
  const [sort, setSort] = useState('');
  const [idOption, setIdOption] = useState('');
  const [price, setPrice] = useState('');

  const handleApply = () => {
    onApplyFilters({ sort, idOption, price });
  };

  return (
    <div className="wrapper">
      <div className="inner">
        <SelectSort name="sort" options={sortOptions} onChange={(e) => setSort(e.target.value)} />
        <SelectSort name="idOption" options={idOptions} onChange={(e) => setIdOption(e.target.value)} />
        <SelectSort name="price" options={priceOptions} onChange={(e) => setPrice(e.target.value)} />
        <button className="myButton" onClick={handleApply}>
          <span>Apply</span>
        </button>
      </div>
    </div>
  );
};

export default CatalogFilter;
