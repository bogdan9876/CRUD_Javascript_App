import React from 'react';

const SelectSort = ({ name, options }) => {
  return (
    <select className="selectSort" name={name}>
      <option>Choose option</option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectSort;
