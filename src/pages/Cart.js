import React, { useContext } from "react";
import { CartContext } from "../components/CartContext";
import Popup from "../components/Popup";
import Header from "../components/Header"
const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleQuantityChange = (item, increment) => {
    setCartItems(
      cartItems.map((cartItem) =>
        cartItem.title === item.title
          ? { ...cartItem, quantity: cartItem.quantity + increment }
          : cartItem
      )
    );
  };

  const handleRemoveItem = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.title !== item.title));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shippingFee = 50; // Assuming a fixed shipping fee
  const orderTotal = subtotal + shippingFee;
  const [isPopupVisible, setPopupVisible] = React.useState(false);
  const handleBuyNow = () => {
    setPopupVisible(true); // Show the popup when the item is added
    setTimeout(() => setPopupVisible(false), 3000); // Hide popup after 3 seconds
  };

  return (
    <>
      <Header />
      <div className="container my-3">
        <h2 className="text-center mb-4">My Cart</h2>
        <table className="table table-hover">
          <thead className="thead-light">
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Subtotal</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid mr-2"
                      style={{ width: "50px" }}
                    />
                    <div style={{ marginLeft: "10px" }}>
                      {item.category} <br /> <small> {item.title}</small>
                    </div>
                  </div>
                </td>
                <td>${item.price.toLocaleString()}</td>
                <td>
                  <div className="d-flex align-items-center justify-content-center">
                    <button
                      className="btn btn-outline-secondary btn-sm mx-1"
                      onClick={() => handleQuantityChange(item, -1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="btn btn-outline-secondary btn-sm mx-1"
                      onClick={() => handleQuantityChange(item, 1)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>${(item.price * item.quantity).toLocaleString()}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleRemoveItem(item)}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="d-flex justify-content-between mt-4">
          <button
            className="btn btn-primary"
            onClick={() => (window.location.href = "/")}
          >
            Continue Shopping
          </button>
          <button className="btn btn-danger" onClick={clearCart}>
            Clear Cart
          </button>
        </div>

        <div
          className="mt-4 p-3"
          style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", marginBottom:"10px" }}
        >
          <h5>Order Summary</h5>
          <p>
            Subtotal:
            <span className="float-right">${subtotal.toLocaleString()}</span>
          </p>
          <p>
            Shipping Fee:
            <span className="float-right">${shippingFee.toFixed(2)}</span>
          </p>
          <h5>
            Total:
            <span className="float-right">${orderTotal.toLocaleString()}</span>
          </h5>
          <button
            className="btn btn-warning"
            style={{ float: "right", marginBottom:"10px",width:"150px", fontSize:"15px" }}
            onClick={() => {
              handleBuyNow();
              clearCart();
            }}
          >
            Buy Now
          </button>
        </div>
        <Popup
          message="Thank you for shopping"
          isVisible={isPopupVisible}
          onClose={() => setPopupVisible(false)}
        />
      </div>
    </>
  );
};

export default Cart;
