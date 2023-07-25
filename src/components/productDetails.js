import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../data/products.json';

const ProductDetails = () => {
  const { productId } = useParams();
  const product = productsData.find((product) => product.id === productId);

  if (!product) {
    return <div>Product not found!</div>;
  }

  const { image, name, price } = product;

  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>${price}</p>
      <p>Quantity: 1</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
