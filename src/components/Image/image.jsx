// src/components/Image.js
import React from 'react';
import product from '../../product';

function Image() {
  return <img src={product.imageUrl} alt={product.name} className="img-fluid" />;
}

export default Image;
