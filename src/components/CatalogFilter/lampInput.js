import React from 'react';

const LampInput = ({ label, name }) => {
  return (
    <label className="myLabel">
      {label} <input type="number" name={name} />
    </label>
  );
};

export default LampInput;
