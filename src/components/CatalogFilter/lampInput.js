import React from 'react';

const LampInput = ({ label, name, onChange }) => {
  return (
    <label className="myLabel">
      {label} <input type="number" name={name} onChange={onChange} />
    </label>
  );
};

export default LampInput;