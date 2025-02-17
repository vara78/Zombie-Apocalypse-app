import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div>
      <img className="small img-fluid" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <div>
        <button className='btn-sm' onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  );
}
