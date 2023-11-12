import React from 'react';

const SelectSort = ({ name, options, onChange }) => {
  return (
    <select className="selectSort" name={name} onChange={onChange}>
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