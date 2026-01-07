import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const [productData, setProductData] = useState([]);

  async function getData() {
    let data = await fetch(`https://dummyjson.com/products`);
    let jsonData = await data.json();
    setProductData(jsonData.products);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="product-grid">
      {productData.map((pData) => (
        <ProductCard key={pData.id} data={pData} />
      ))}
    </div>
  );
};

export default ProductGrid;
