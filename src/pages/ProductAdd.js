import React from 'react';
import Footer from '../components/Footer';
import Form from '../components/Form';
import Header from '../components/Header';

const ProductAdd = () => {
  return (
    <>
      <Header title={'ADD'} actions={['SAVE', 'CANCEL']} />
      <Form />
      <Footer />
    </>
  );
};

export default ProductAdd;
