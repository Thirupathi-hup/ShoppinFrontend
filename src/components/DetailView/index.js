import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./index.css"; 
const ProductDetail = () => {
  const { id } = useParams(); // To access the id from the URL
  const [watch, setWatch] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWatchDetails = async () => {
      try {
        const response = await axios.get(`https://shopinbackend.onrender.com/products/${id}`);
        setWatch(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWatchDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!watch) {
    return <div>Product not found</div>;
  }

  const { image, model, price, releaseDate, caseSizes, colors, features, availableBands } = watch;

  return (
    <div className="watch-details">
      <img src={image} alt={model} className="watch-details-image" />
      <h2>{model}</h2>
      <p><strong>Price:</strong> {price}</p>
      <p><strong>Release Date:</strong> {releaseDate}</p>
      <p><strong>Case Sizes:</strong> {caseSizes.join(", ")}</p>
      <p><strong>Colors:</strong> {colors.join(", ")}</p>
      <p><strong>Features:</strong></p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <p><strong>Available Bands:</strong> {availableBands.join(", ")}</p>
    </div>
  );
};

export default ProductDetail;
