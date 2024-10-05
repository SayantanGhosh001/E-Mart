import React from "react";

const ProductCard = ({ product, onProductClick }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        margin: "10px",
        padding: "10px",
        width: "200px",
      }}
    >
      <img src={product.image} alt={product.title} width="100%" />
      <h4>{product.title}</h4>
      <p>${product.price}</p>
      <button onClick={() => onProductClick(product.id)}>View Details</button>
    </div>
  );
};

export default ProductCard;
