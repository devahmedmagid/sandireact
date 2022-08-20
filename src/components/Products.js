import React, { useState } from 'react';
import Product from './Product';
import '../styles/Products.min.css';

const Products = ({ products, handleChange }) => {
  return (
    <div className='grid-container'>
      {products.map((product) => (
        <Product
          key={product.sku}
          productSKU={product.sku}
          productName={product.name}
          productPrice={product.price}
          ProductSwitcher={product.switcher}
          productSize={product.size}
          productHeight={product.height}
          productLength={product.length}
          productWeight={product.weight}
          productWidth={product.width}
          handleChange={handleChange}
          productId={product.id}
        />
      ))}
    </div>
  );
};

export default Products;
