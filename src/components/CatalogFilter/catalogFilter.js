import React from 'react';
import './CatalogFilter.css';

const CatalogFilter = () => {
  return (
    <div className="wrapper" style={{ borderRadius: '12px', maxWidth: '97%' }}>
      <div
        className="inner"
        style={{
          marginBottom: '1.4vw',
          marginTop: '1.4vw',
        }}
      >
        <select className="selectSort" name="sort">
          <option style={{ display: 'none' }}>Choose option</option>
          <option value="sortByPrice">Sort by price</option>
          <option value="sortByTitle">Sort by title</option>
          <option value="sortByType">Sort by type</option>
        </select>
        <div style={{ display: 'flex' }}>
          <label className="myLabel">
            Minimum price <input type="number" name="minPrice" />
          </label>
          <label className="myLabel">
            Maximum price <input type="number" name="maxPrice" />
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
