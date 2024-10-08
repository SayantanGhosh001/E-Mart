import photo from "../image/fakeshop.png"
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Header = () => {
  const { cartItems } = useContext(CartContext); // Access cartItems from context
  const cartCount = cartItems.length; // Get the number of items in the cart

  return (
    <header>
      <div
        className="text-center bg-white border-bottom"
        style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
      >
        <div className="container">
          <div
            className="row gy-3"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div className="col-lg-2 col-sm-4 col-4">
              <a
                href="#"
                target="_blank"
                className="float-start"
                onClick={() => (window.location.href = "/")}
              >
                <img src={photo} height="45" style={{ marginBottom: "16px" }} />
                <div className="name">E-Mart</div>
              </a>
            </div>
            <div
              className="order-lg-last col-lg-5 col-sm-8 col-8 "
              style={{ marginTop: "30px" }}
            >
              <div className="d-flex float-end">
                <a
                  href="#"
                  className="me-1 border rounded py-1 px-3 nav-link d-flex align-items-center"
                  target="_blank"
                >
                  <i className="fas fa-user-alt m-1 me-md-2"></i>
                  <p className="d-none d-md-block mb-0">Sign in</p>
                </a>
                <a
                  href="#"
                  className="me-1 border rounded py-1 px-3 nav-link d-flex align-items-center"
                  target="_blank"
                >
                  <i className="fas fa-heart m-1 me-md-2"></i>
                  <p className="d-none d-md-block mb-0">Wishlist</p>
                </a>
                <Link to="../pages/Cart">
                  <a
                    href="#"
                    className="border rounded py-1 px-3 nav-link d-flex align-items-center"
                    target="_blank"
                  >
                    <i
                      className="fas fa-shopping-cart m-1 me-md-2"
                      style={{ color: "black" }}
                    ></i>

                    <p
                      className="d-none d-md-block mb-0"
                      style={{ color: "black" }}
                    >
                      My cart
                    </p>
                    {cartCount > 0 && ( // Only show the notification if there are items in the cart
                      <span
                        className="badge badge-danger position-absolute"
                        style={{
                          top: "9px",
                          right: "132px",
                          fontSize: "0.7rem",
                        }}
                      >
                        {cartCount}
                      </span>
                    )}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header