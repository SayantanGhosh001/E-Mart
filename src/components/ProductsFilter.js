import { useEffect, useState } from "react";

const ProductsFilter = () => {
  let [categories, setCategories] = useState([]);
  let [categoriesLoading, setCategoriesLoading] = useState(true);

  let getCategories = async () => {
    let response = await fetch("https://fakestoreapi.com/products/categories");
    let tempCategories = await response.json();
    setCategoriesLoading(false);
    setCategories(tempCategories);
  };
  useEffect(() => getCategories, []);
  if (categoriesLoading) return <h1>categories loading...</h1>;
  return (
    <>
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
                    {categories.map((category) => (
                      <>
                        <li>
                          <a href="#" className="text-dark">
                            {category.toUpperCase()}{" "}
                          </a>
                        </li>
                      </>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsFilter;
