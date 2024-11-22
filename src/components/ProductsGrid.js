import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import ProductCard from "./ProductCard";
import ProductPlaceHolder from "./ProductPlaceHolder";
import get from "../api/api";

const ProductsGrid = () => {
  let [products, setProducts] = useState([]);
  let [categories, setCategories] = useState([]);
  let [minimumPrice, setMinimumPrice] = useState(0);
  let [maximumPrice, setMaximumPrice] = useState(0);
  let [minimumSelectedPrice, setMinimumSelectedPrice] = useState(0);
  let [maximumSelectedPrice, setMaximumSelectedPrice] = useState(0);

  let [loading, setLoading] = useState(true);

  let getMinimumPrice = async () => {
    let tempProducts = await get("products");
    let prices = tempProducts.map((product) => product.price);
    setMinimumPrice(Math.min(...prices));
    setMaximumPrice(Math.max(...prices));
    setMinimumSelectedPrice(Math.min(...prices));
    setMaximumSelectedPrice(Math.max(...prices));
  };

  useEffect(() => {
    (async () => {
      let tempProducts = await get("products");
      setProducts(tempProducts);

      let tempCategories = await get("products/categories");
      setCategories(tempCategories);
      await getMinimumPrice();
      setLoading(false);
    })();
  }, []);

  const categoryFilterHandler = async (category) => {
    setLoading(true);
    let tempProducts = await get("products");
    setLoading(false);
    let filterItems = tempProducts.filter(
      (product) => product.category === category
    );
    setProducts(filterItems);
  };

  let setMaximumPriceHandler = (price) => {
    setMaximumSelectedPrice(price);
  };

  let setMinimumPriceHanler = (price) => {
    setMinimumSelectedPrice(price);
  };

  let priceChangeFilter = async () => {
    setLoading(true);
    let tempProducts = await get("products");
    setLoading(false);
    let filterItems = tempProducts.filter(
      (product) =>
        product.price >= minimumSelectedPrice &&
        product.price <= maximumSelectedPrice
    );
    setProducts(filterItems);
  };

  let sortingFilter = (param) => {
    let tempProducts = [...products];
    if (param == 0) tempProducts.sort((a, b) => a.price - b.price);
    else if (param == 1) tempProducts.sort((a, b) => b.price - a.price);

    setProducts(tempProducts);
  };

  if (loading)
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <button
                className="btn btn-outline-secondary mb-3 w-100 d-lg-none"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span>Show filter</span>
              </button>

              <div
                className="collapse card d-lg-block mb-5"
                id="navbarSupportedContent"
              >
                <div className="accordion" id="accordionPanelsStayOpenExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button text-dark bg-light"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#panelsStayOpen-collapseOne"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne"
                      >
                        Related items
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                    >
                      <div className="accordion-body">
                        <ul className="list-unstyled">
                          <p className="card-text placeholder-glow">
                            <span className="placeholder col-7"></span>
                            <span className="placeholder col-4"></span>
                            <span className="placeholder col-4"></span>
                            <span className="placeholder col-6"></span>
                            <span className="placeholder col-8"></span>
                          </p>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button text-dark bg-light"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#panelsStayOpen-collapseThree"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseThree"
                      >
                        Price
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseThree"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingThree"
                    >
                      <div className="accordion-body">
                        <ul className="list-unstyled">
                          <p className="card-text placeholder-glow">
                            <span className="placeholder col-7"></span>
                            <span className="placeholder col-4"></span>
                            <span className="placeholder col-4"></span>
                            <span className="placeholder col-6"></span>
                            <span className="placeholder col-8"></span>
                          </p>
                        </ul>

                        <button
                          type="button"
                          className="btn btn-white w-100 border border-secondary disabled placeholder"
                        >
                          apply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-9">
              <header className="d-sm-flex align-items-center border-bottom mb-4 pb-3">
                <strong className="d-block py-2">0 Items found </strong>
                <div className="ms-auto">
                  <select
                    className="form-select d-inline-block w-auto border pt-1"
                    placeholder="Price filter"
                  >
                    <option value="-1">Price filter</option>
                    <option value="0">Price Min to Max</option>
                    <option value="1">Prince Max to Min</option>
                  </select>
                  <div className="btn-group shadow-0 border">
                    <a href="#" className="btn btn-light" title="List view">
                      <i className="fa fa-bars fa-lg"></i>
                    </a>
                    <a
                      href="#"
                      className="btn btn-light active"
                      title="Grid view"
                    >
                      <i className="fa fa-th fa-lg"></i>
                    </a>
                  </div>
                </div>
              </header>

              <div className="row">
                {[...Array(20).keys()].map(() => (
                  <ProductPlaceHolder />
                ))}
              </div>

              <hr />
            </div>
          </div>
        </div>
      </section>
    );

  return (
    <section>
      <div className="container" style={{ marginTop: "10px" }}>
        <div className="row">
          <div className="col-lg-3">
            <button
              className="btn btn-outline-secondary mb-3 w-100 d-lg-none"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span>Show filter</span>
            </button>

            <div
              className="collapse card d-lg-block mb-5"
              id="navbarSupportedContent"
            >
              <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button text-dark bg-light"
                      type="button"
                      data-mdb-toggle="collapse"
                      data-mdb-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      Related items
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                  >
                    <div className="accordion-body">
                      <ul className="list-unstyled">
                        {categories.map((category, index) => (
                          <li
                            style={{ cursor: "pointer" }}
                            className="text-dark text-capitalize "
                            onClick={() => categoryFilterHandler(category)}
                            key={index}
                          >
                            {category}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button text-dark bg-light"
                      type="button"
                      data-mdb-toggle="collapse"
                      data-mdb-target="#panelsStayOpen-collapseThree"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseThree"
                    >
                      Price
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseThree"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingThree"
                  >
                    <div className="accordion-body">
                      <div className="range">
                        <input
                          type="range"
                          className="form-range"
                          onChange={(event) =>
                            setMinimumPriceHanler(event.target.value)
                          }
                          min={minimumPrice}
                          max={maximumPrice}
                        />
                      </div>

                      <div className="row mb-3">
                        <div className="col-12">
                          <p className="mb-0">
                            Min price{" "}
                            <label className="form-label">
                              $ {minimumSelectedPrice}
                            </label>
                          </p>
                        </div>
                      </div>

                      <div className="range">
                        <input
                          type="range"
                          className="form-range"
                          onChange={(event) =>
                            setMaximumPriceHandler(event.target.value)
                          }
                          min={minimumSelectedPrice}
                          max={maximumPrice}
                        />
                      </div>

                      <div className="row mb-3">
                        <div className="col-12">
                          <p className="mb-0">
                            Max price{" "}
                            <label className="form-label">
                              $ {maximumSelectedPrice}
                            </label>
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={priceChangeFilter}
                        className="btn btn-white w-100 border border-secondary"
                      >
                        apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-9">
            <header className="d-sm-flex align-items-center border-bottom mb-4 pb-3">
              <strong className="d-block py-2">
                {products.length} Items found{" "}
              </strong>
              <div className="ms-auto">
                <select
                  onChange={(event) => sortingFilter(event.target.value)}
                  className="form-select d-inline-block w-auto border pt-1"
                >
                  <option value="-1">Price filter</option>
                  <option value="0">Price Min to Max</option>
                  <option value="1">Prince Max to Min</option>
                </select>
              </div>
            </header>
            <div className="row">
              {products.map((product) => (
                <ProductCard product={product} />
              ))}
            </div>
            <hr />
          </div>
          <Pagination />
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;
