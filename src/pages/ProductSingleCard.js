import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import get from "../api/api"; // Assuming this is your API function to fetch data
import "../css/product.css"
import Header from './../components/Header';
import LoadingSVG from "../image/Infinity@1x-1.0s-200px-200px.svg";

const ProductSingleCard = () => {
  const { id } = useParams(); // Extract the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch product details when the component mounts
    const fetchProduct = async () => {
      try {
        const productData = await get(`products/${id}`); // Fetch product by ID
        setProduct(productData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div style={{textAlign:"center",alignItems:"center",display:"flex",justifyContent:"center",height:"90vh"}}>
      <img src={LoadingSVG} alt="loading" style={{width:"100px"}} />
    </div>;
  }

  if (!product) {
    return <div>Product not found!</div>;
  }
const descriptionItems = product.description.split(/\.\s+(?=[a-zA-Z])/);
  return (
    <>
     <Header/>
      <div className="fullbody">
        <div className="bodyleft">
          <img src={product.image} alt={product.title} className="no1img" />
          <div className="buttons">
            <button className="button1">ADD TO CART</button>
            <button className="button2">BUY NOW</button>
          </div>
        </div>
        <div className="bodyright">
          <div className="productname">{product.title}</div>

          <div className="rate">
            <span className="rnum">{product.rating.rate}★</span>
            <span className="numofrtn" style={{ padding: "5px" }}>
              {product.rating.count} Ratings
            </span>
          </div>

          <p className="spprice">Special price</p>
          <div>
            <span className="price">${product.price}</span>
            <span className="discount">15% off</span>
          </div>

          <div className="aboutproduct">
            <div className="abtprdt">Product Description</div>
            <ul className="ul1">
              {descriptionItems.map(
                (item, index) =>
                  item.trim() && (
                    <li key={index} className="liitem">
                      {item.trim()}.
                    </li>
                  )
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSingleCard;
