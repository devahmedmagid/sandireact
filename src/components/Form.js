import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Form.min.css';

const Form = () => {
  const navigate = useNavigate();
  const [switcherValue, setSwitcherValue] = useState('');
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({
      ...values,
      [name]: value,
      switcher: switcherValue,
    }));
    console.log(inputs);
  };

  const handleSwitcher = (e) => {
    setSwitcherValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://myscandi.herokuapp.com/', inputs)
      .then(function (response) {
        navigate('/');
      });
  };

  return (
    <form onSubmit={handleSubmit} id='product_form'>
      <div className='form-group'>
        <div>
          <label htmlFor='sku'>SKU</label>
          <input
            type='text'
            id='sku'
            placeholder='#sku'
            name='sku'
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            placeholder='#name'
            name='name'
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='price'>Price ($)</label>
          <input
            type='number'
            id='price'
            placeholder='#price'
            name='price'
            required
            onChange={handleChange}
          />
        </div>

        <div className='switcher' id='switcher'>
          <label htmlFor='productType'>Type Switcher</label>
          <select
            onChange={handleSwitcher}
            id='productType'
            name='typeSwitcher'
            required
          >
            <option value=''>#select</option>
            <option value='dvd'>DVD-disc</option>
            <option value='book'>Book</option>
            <option value='furniture'>Furniture</option>
          </select>
          {switcherValue === 'dvd' && (
            <>
              <div>
                <label htmlFor='size'>Size (MB)</label>
                <input
                  type='number'
                  id='size'
                  placeholder='#size'
                  name='size'
                  onChange={handleChange}
                />
              </div>
              <div>
                <br />
                <p>Please Provide DVD Size in MB!</p>
              </div>
            </>
          )}
          {switcherValue === 'furniture' && (
            <>
              <div>
                <label htmlFor='height'>Height (CM)</label>
                <input
                  type='number'
                  id='height'
                  placeholder='#height'
                  name='height'
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor='width'>Width (CM)</label>
                <input
                  type='number'
                  id='width'
                  placeholder='#width'
                  name='width'
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor='length'>Length (CM)</label>
                <input
                  type='number'
                  id='length'
                  placeholder='#length'
                  name='length'
                  onChange={handleChange}
                />
              </div>
              <div>
                <br />
                <p>Please Provide dimensions in HxWxL format!</p>
              </div>
            </>
          )}
          {switcherValue === 'book' && (
            <>
              <div>
                <label htmlFor='weight'>Weight (KG)</label>
                <input
                  type='number'
                  id='weight'
                  placeholder='#weight'
                  name='weight'
                  onChange={handleChange}
                />
              </div>
              <div>
                <br />
                <p>Please Provide Book Weight in KG!</p>
              </div>
            </>
          )}
        </div>
      </div>
    </form>
  );
};

export default Form;
