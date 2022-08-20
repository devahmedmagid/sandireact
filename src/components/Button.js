import React from 'react';
import '../styles/Button.min.css';
const Button = ({ text, id, type, handleRemove }) => {
  const handleButtonAction = () => {
    if (type === 'delete') {
      handleRemove();
    }
  };

  return (
    <button
      onClick={handleButtonAction}
      className='btn'
      id={id}
      type={type}
      form='product_form'
    >
      {text}
    </button>
  );
};

export default Button;
