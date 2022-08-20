import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Products from '../components/Products';

const ProductList = ({ products, handleChange, handleRemove }) => {
  return (
    <>
      <Header
        products={products}
        handleRemove={handleRemove}
        title={'List'}
        actions={['ADD', 'MASS DELETE']}
      />
      <Products products={products} handleChange={handleChange} />
      <Footer />
    </>
  );
};

export default ProductList;
