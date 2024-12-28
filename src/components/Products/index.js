import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import OptionsSelector from "../Option";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

const WatchPreview = () => {
  const [watches, setWatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWatches = async () => {
      try {
        const response = await axios.get("https://shopinbackend.onrender.com/products");
        setWatches(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWatches();
  }, []);

  const handleImageClick = (id) => {
    navigate(`/products/${id}`);
  };

  const handleAddToCart = async (id) => {
    try {
      const product = watches.find((watch) => watch.id === id);
      if (!product) return;

      const quantity = 1; // Fixed quantity for now
      await axios.post("https://shopinbackend.onrender.com/cart", {
        id,
        quantity,
      });

      alert("Product added to cart!");
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Apple Watch Collection</h1>
      <Slider {...sliderSettings}>
        {watches.map((watch) => (
          <div key={watch.id} className="watch-item">
            <img
              src={watch.image}
              alt={watch.model}
              onClick={() => handleImageClick(watch.id)}
              style={{ cursor: "pointer" }}
            />
            <h3>{watch.model}</h3>
            <p>{watch.price}</p>
            <button onClick={() => handleAddToCart(watch.id)}>Add to Cart</button>
          </div>
        ))}
      </Slider>

      <OptionsSelector watches={watches} />
    </div>
  );
};

export default WatchPreview;
