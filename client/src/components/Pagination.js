const Pagination = ({currentPage, products, productsPerPage, paginate}) => {
    const pages = [];

    for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
        pages.push(i);
     }

    return ( 
        <div className="pagination-container flex">
                <div className="paginate-box flex">
                    {
                        pages.map((page, key) => (
                            <div className={currentPage === page ? "paginate  active-page" : "paginate"} onClick={() => paginate(page)} key={key}>
                                {page}
                            </div>
                        ))
                    }
                </div>
        </div>
     );
}
 
export default Pagination
