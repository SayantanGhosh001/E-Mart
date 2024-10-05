const Header = () => {
    return (
        <header>
            <div className="p-3 text-center bg-white border-bottom">
                <div className="container">
                    <div className="row gy-3">
                        <div className="col-lg-2 col-sm-4 col-4">
                            <a href="#" target="_blank" className="float-start">
                                <img src="fakeshop.png" height="45" />
                            </a>
                        </div>
                        <div className="order-lg-last col-lg-5 col-sm-8 col-8">
                            <div className="d-flex float-end">
                                <a href="#"
                                    className="me-1 border rounded py-1 px-3 nav-link d-flex align-items-center" target="_blank">
                                    <i className="fas fa-user-alt m-1 me-md-2"></i>
                                    <p className="d-none d-md-block mb-0">Sign in</p>
                                </a>
                                <a href="#"
                                    className="me-1 border rounded py-1 px-3 nav-link d-flex align-items-center" target="_blank">
                                    <i className="fas fa-heart m-1 me-md-2"></i>
                                    <p className="d-none d-md-block mb-0">Wishlist</p>
                                </a>
                                <a href="#"
                                    className="border rounded py-1 px-3 nav-link d-flex align-items-center" target="_blank">
                                    <i className="fas fa-shopping-cart m-1 me-md-2"></i>
                                    <p className="d-none d-md-block mb-0">My cart</p>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-12 col-12">
                            {/* <div className="input-group float-center">
                                <div className="form-outline">
                                    <input type="text" id="form1" className="form-control" />
                                    <label className="form-label" htmlFor="form1">Search</label>
                                </div>
                                <button type="button" className="btn btn-primary shadow-0">
                                    <i className="fas fa-search"></i>
                                </button>
                            </div> */}
                        </div>

                    </div>
                </div>
            </div>

            <div className="bg-primary mb-4">
                <div className="container py-4">
                    <h3 className="text-white mt-2">Products</h3>

                    <nav className="d-flex mb-2">
                        <h6 className="mb-0">
                            <a href="" className="text-white-50">Home</a>
                            <span className="text-white-50 mx-2"> / </span>
                            <a href="" className="text-white-50">Library</a>
                            <span className="text-white-50 mx-2"> / </span>
                            <a href="" className="text-white"><u>Data</u></a>
                        </h6>
                    </nav>

                </div>
            </div>

        </header>
    )
}

export default Header