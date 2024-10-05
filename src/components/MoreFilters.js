const MoreFilters = () => {
    <>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
                <button
                    className="accordion-button text-dark bg-light"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseTwo"
                >
                    Brands
                </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo">
                <div className="accordion-body">
                    <div>

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked1" />
                            <label className="form-check-label" htmlFor="flexCheckChecked1">Mercedes</label>
                            <span className="badge badge-secondary float-end">120</span>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked2" />
                            <label className="form-check-label" htmlFor="flexCheckChecked2">Toyota</label>
                            <span className="badge badge-secondary float-end">15</span>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked3" />
                            <label className="form-check-label" htmlFor="flexCheckChecked3">Mitsubishi</label>
                            <span className="badge badge-secondary float-end">35</span>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked4" />
                            <label className="form-check-label" htmlFor="flexCheckChecked4">Nissan</label>
                            <span className="badge badge-secondary float-end">89</span>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">Honda</label>
                            <span className="badge badge-secondary float-end">30</span>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">Suzuki</label>
                            <span className="badge badge-secondary float-end">30</span>
                        </div>
                    </div>
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
            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree">
                <div className="accordion-body">
                    <div className="range">
                        <input type="range" className="form-range" id="customRange1" />
                    </div>
                    <div className="row mb-3">
                        <div className="col-6">
                            <p className="mb-0">
                                Min
                            </p>
                            <div className="form-outline">
                                <input type="number" id="typeNumber" className="form-control" />
                                <label className="form-label" htmlFor="typeNumber">$0</label>
                            </div>
                        </div>
                        <div className="col-6">
                            <p className="mb-0">
                                Max
                            </p>
                            <div className="form-outline">
                                <input type="number" id="typeNumber" className="form-control" />
                                <label className="form-label" htmlFor="typeNumber">$1,0000</label>
                            </div>
                        </div>
                    </div>
                    <button type="button" className="btn btn-white w-100 border border-secondary">apply</button>
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
                <button
                    className="accordion-button text-dark bg-light"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#panelsStayOpen-collapseFour"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseFour"
                >
                    Size
                </button>
            </h2>
            <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse show" aria-labelledby="headingThree">
                <div className="accordion-body">
                    <input type="checkbox" className="btn-check border justify-content-center" id="btn-check1" autoComplete="off" />
                    <label className="btn btn-white mb-1 px-1" style={{ width: "60px" }} htmlFor="btn-check1">XS</label>
                    <input type="checkbox" className="btn-check border justify-content-center" id="btn-check2" autoComplete="off" />
                    <label className="btn btn-white mb-1 px-1" style={{ width: "60px" }} htmlFor="btn-check2">SM</label>
                    <input type="checkbox" className="btn-check border justify-content-center" id="btn-check3" autoComplete="off" />
                    <label className="btn btn-white mb-1 px-1" style={{ width: "60px" }} htmlFor="btn-check3">LG</label>
                    <input type="checkbox" className="btn-check border justify-content-center" id="btn-check4" autoComplete="off" />
                    <label className="btn btn-white mb-1 px-1" style={{ width: "60px" }} htmlFor="btn-check4">XXL</label>
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
                <button
                    className="accordion-button text-dark bg-light"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#panelsStayOpen-collapseFive"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseFive"
                >
                    Ratings
                </button>
            </h2>
            <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse show" aria-labelledby="headingThree">
                <div className="accordion-body">

                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            <i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>
                        </label>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            <i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-secondary"></i>
                        </label>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            <i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning"></i><i className="fas fa-star text-secondary"></i>
                            <i className="fas fa-star text-secondary"></i>
                        </label>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            <i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning"></i><i className="fas fa-star text-secondary"></i><i className="fas fa-star text-secondary"></i>
                            <i className="fas fa-star text-secondary"></i>
                        </label>
                    </div>
                </div>
            </div>
        </div></>
}

export default MoreFilters