import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

function ProductList() {
  const dispatch = useDispatch();

  const [addedItems, setAddedItems] = useState([]);

  const plants = [
    {
      id: 1,
      name: "Snake Plant",
      price: 20,
      category: "Air Purifying Plants",
      image:
        "https://images.unsplash.com/photo-1593691509543-c55fb32e5b7f",
      description:
        "A low-maintenance air-purifying plant perfect for indoor spaces.",
    },
    {
      id: 2,
      name: "Peace Lily",
      price: 25,
      category: "Air Purifying Plants",
      image:
        "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
      description:
        "Beautiful flowering plant that improves indoor air quality.",
    },
    {
      id: 3,
      name: "Aloe Vera",
      price: 15,
      category: "Succulents",
      image:
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
      description:
        "Medicinal succulent plant known for its healing properties.",
    },
    {
      id: 4,
      name: "Cactus",
      price: 18,
      category: "Succulents",
      image:
        "https://images.unsplash.com/photo-1459156212016-c812468e2115",
      description:
        "Stylish desert plant requiring minimal watering and care.",
    },
    {
      id: 5,
      name: "Money Plant",
      price: 22,
      category: "Indoor Plants",
      image:
        "https://images.unsplash.com/photo-1497250681960-ef046c08a56e",
      description:
        "Popular indoor plant believed to bring prosperity and positivity.",
    },
    {
      id: 6,
      name: "Spider Plant",
      price: 19,
      category: "Indoor Plants",
      image:
        "https://images.unsplash.com/photo-1483794344563-d27a8d38e1a5",
      description:
        "Easy-to-grow indoor plant with excellent air-cleaning abilities.",
    },
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));

    setAddedItems((prevItems) => [...prevItems, plant.id]);
  };

  return (
    <div
      style={{
        padding: "30px",
        backgroundColor: "#f4f4f4",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "40px",
          color: "#2e8b57",
        }}
      >
        Paradise Nursery Plant Collection
      </h1>

      {[
        "Air Purifying Plants",
        "Succulents",
        "Indoor Plants",
      ].map((category) => (
        <div key={category} style={{ marginBottom: "50px" }}>
          <h2
            style={{
              color: "#333",
              marginBottom: "20px",
            }}
          >
            {category}
          </h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "25px",
            }}
          >
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div
                  key={plant.id}
                  style={{
                    backgroundColor: "white",
                    borderRadius: "12px",
                    width: "250px",
                    padding: "15px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  }}
                >
                  <img
                    src={plant.image}
                    alt={plant.name}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />

                  <h3>{plant.name}</h3>

                  <p>{plant.description}</p>

                  <h4>Price: ${plant.price}</h4>

                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={addedItems.includes(plant.id)}
                    style={{
                      padding: "10px 18px",
                      backgroundColor: addedItems.includes(plant.id)
                        ? "gray"
                        : "#2e8b57",
                      color: "white",
                      border: "none",
                      borderRadius: "6px",
                      cursor: "pointer",
                    }}
                  >
                    {addedItems.includes(plant.id)
                      ? "Added to Cart"
                      : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
