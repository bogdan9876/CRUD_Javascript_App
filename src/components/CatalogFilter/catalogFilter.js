import React from 'react';
import './CatalogFilter.css';
import SelectSort from './selectSort';
import LampInput from './lampInput';

const options = [
  { value: 'sortByPrice', label: 'Sort by price' },
  { value: 'sortByTitle', label: 'Sort by title' },
  { value: 'sortByType', label: 'Sort by type' },
];

const CatalogFilter = () => {
  return (
    <div className="wrapper">
      <div className="inner">
        <SelectSort name="sort" options={options} />
        <div>
          <LampInput label="Lamp ID" name="LampID" />
          <LampInput label="Lamp Price" name="LampPrice" />
        </div>
        <button className="myButton">
          <span>Apply</span>
        </button>
      </div>
    </div>
  );
};

export default CatalogFilter;
