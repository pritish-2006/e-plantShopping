import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

function CartItem() {
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const increaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    }
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

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
          color: "#2e8b57",
          marginBottom: "20px",
        }}
      >
        Shopping Cart
      </h1>

      <h2 style={{ textAlign: "center" }}>
        Total Cart Items: {totalItems}
      </h2>

      <h3
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        Total Cart Amount: ${calculateTotalAmount()}
      </h3>

      {cartItems.length === 0 ? (
        <h2 style={{ textAlign: "center" }}>
          Your cart is empty
        </h2>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id}
            style={{
              backgroundColor: "white",
              marginBottom: "25px",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "140px",
                height: "140px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />

            <div style={{ flex: 1 }}>
              <h2>{item.name}</h2>

              <p>Unit Price: ${item.price}</p>

              <p>Quantity: {item.quantity}</p>

              <p>
                Total Price: $
                {item.price * item.quantity}
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  marginTop: "15px",
                }}
              >
                <button
                  onClick={() => increaseQuantity(item)}
                  style={{
                    padding: "10px 16px",
                    border: "none",
                    backgroundColor: "#2e8b57",
                    color: "white",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  +
                </button>

                <button
                  onClick={() => decreaseQuantity(item)}
                  style={{
                    padding: "10px 16px",
                    border: "none",
                    backgroundColor: "#ff9800",
                    color: "white",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  -
                </button>

                <button
                  onClick={() => handleRemoveItem(item.id)}
                  style={{
                    padding: "10px 16px",
                    border: "none",
                    backgroundColor: "#e53935",
                    color: "white",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        <button
          style={{
            padding: "14px 24px",
            backgroundColor: "#2e8b57",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Continue Shopping
        </button>

        <button
          style={{
            padding: "14px 24px",
            backgroundColor: "#000",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartItem;
