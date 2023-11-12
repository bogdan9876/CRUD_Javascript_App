import React from 'react';
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
  { value: '1000', label: '501 - 1000 uah' },
  { value: '1000+', label: '1000+ uah' },
];


const CatalogFilter = ({ onSortChange, onIdChange, onPriceChange }) => {
  return (
    <div className="wrapper">
      <div className="inner">
        <SelectSort name="sort" options={sortOptions} onChange={onSortChange} />
        <SelectSort name="id" options={idOptions} onChange={onIdChange} />
        <SelectSort name="price" options={priceOptions} onChange={onPriceChange} />
        <button className="myButton">
          <span>Apply</span>
        </button>
      </div>
    </div>
  );
};

export default CatalogFilter;
