import React from "react";

const ProductCard = ({ data }) => {
  const {
    title,
    category,
    price,
    discountPercentage,
    rating,
    stock,
    tags,
    brand,
    thumbnail,
  } = data;

  const discountedPrice = (price - (price * discountPercentage) / 100).toFixed(
    2
  );

  return (
    <div className="product-card">
      <div className="image-wrapper">
        <img src={thumbnail} alt={title} />
        <span className="discount-badge">
          {discountPercentage.toFixed(0)}% OFF
        </span>
      </div>

      <div className="product-info">
        <p className="brand">{brand}</p>
        <h3 className="title">{title}</h3>
        <p className="category">{category}</p>

        <div className="price-container">
          <span className="price">₹{discountedPrice}</span>
          <span className="original-price">₹{price}</span>
        </div>

        <div className="meta">
          <span>⭐ {rating}</span>
          <span>{stock} in stock</span>
        </div>

        <div className="tags">
          {tags?.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <button className="add-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
