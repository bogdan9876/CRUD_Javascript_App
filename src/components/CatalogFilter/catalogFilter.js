import React from 'react';
import './CatalogFilter.css';

const CatalogFilter = () => {
  return (
    <div className="wrapper">
      <div className="inner">
        <select className="selectSort" name="sort">
          <option>Choose option</option>
          <option value="sortByPrice">Sort by price</option>
          <option value="sortByTitle">Sort by title</option>
          <option value="sortByType">Sort by type</option>
        </select>
        <div>
          <label className="myLabel">
            Lamp ID <input type="number" name="LampID" />
          </label>
          <label className="myLabel">
            Lamp Price <input type="number" name="LampPrice" />
          </label>
        </div>
        <button className="myButton">
          <span>Apply</span>
        </button>
      </div>
    </div>
  );
};

export default CatalogFilter;
