import React from 'react';
import '../styles/Product.min.css';

const Product = ({
  productSKU,
  productName,
  productPrice,
  ProductSwitcher,
  productSize,
  productWeight,
  productHeight,
  productWidth,
  productLength,
  productId,
  checked,
  handleChange,
}) => {
  return (
    <div className='product'>
      <input
        type='checkbox'
        name='delete'
        className='delete-checkbox'
        checked={checked}
        onChange={() => handleChange(productId)}
      />
      <div className='product__info'>
        <p>{productSKU}</p>
        <p>{productName}</p>
        <p>
          {productPrice}
          <span> $</span>
        </p>
        {ProductSwitcher === 'dvd' && <p>Size: {productSize}MB</p>}
        {ProductSwitcher === 'book' && <p>Weight: {productWeight}KG</p>}
        {ProductSwitcher === 'furniture' && (
          <p>
            Dimension: {productHeight}x{productWidth}x{productLength}
          </p>
        )}
      </div>
    </div>
  );
};

export default Product;
