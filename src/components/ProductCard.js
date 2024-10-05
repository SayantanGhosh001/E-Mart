import Rating from "./Rating"
import { useNavigate } from "react-router-dom";


const ProductCard = ({ product}) => {

const navigate = useNavigate();
const handleProductClick = () => {
// Navigate to the single product details page
  console.log("Navigating to product details with ID:", product.id);
 navigate(`/product/${product.id}`);
};
  return (
    <div key={product.id} className="col-lg-4 col-md-6 col-sm-6 d-flex my-1" onClick={handleProductClick}>
      <div className="card shadow-2-strong w-100 my-2 ">
        <img
          src={product.image}
          className="card-img-top mx-auto d-block"
          style={{ width: "150px", height: "150px" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">
            $ {product.price}
            <span className="badge bg-danger text-sm float-end text-capitalize">
              {" "}
              {product.category}{" "}
            </span>
          </h5>
          <p className="card-text"> {product.title}</p>
          <div className="">{<Rating rating={product.rating} />}</div>
          <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
            <a href="#!" className="btn btn-primary shadow-0 me-1">
              Add to cart
            </a>
            <a href="#!" className="btn btn-light border icon-hover px-2 pt-2">
              <i className="fas fa-heart fa-lg text-secondary px-1"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard