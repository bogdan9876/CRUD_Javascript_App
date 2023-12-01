import React from 'react';
import { useFormikContext } from 'formik';


const ErrorValid = () => {
  const { errors } = useFormikContext();

  const errorList = Object.keys(errors).map((fieldName, index) => (
    <div key={index}>{errors[fieldName]}</div>
  ));

  return (
    <div style={{ color: 'red' }}>
      <p>Please correct the following errors:</p>
      {errorList}
    </div>
  );
};

export default ErrorValid;
