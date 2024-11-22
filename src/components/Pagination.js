const Pagination = () => {
    return (
        <nav aria-label="Page navigation example" className="d-flex justify-content-center mt-3">
            <ul className="pagination">
                <li key="1" className="page-item disabled">
                    <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
        <li key="2" className="page-item active"><a className="page-link" href="#">1</a></li>
                <li key="3" className="page-item"><a className="page-link" href="#">2</a></li>
                <li key="4" className="page-item"><a className="page-link" href="#">3</a></li>
                <li key="5" className="page-item"><a className="page-link" href="#">4</a></li>
                <li key="6" className="page-item"><a className="page-link" href="#">5</a></li>
                <li key="7" className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination