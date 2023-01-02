import { useEffect, useState } from "react";
import { fetchData } from "../api";

import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

const Products = ({products, setProducts, category, user}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (page) => {
        setCurrentPage(page);
        
        setTimeout(() => {
            window.scrollTo({top: document.querySelector(".products-grid").offsetTop-50, behavior: 'smooth'});
        }, 200);
    }

    useEffect(() => {
        const fetchProductsData = async () => {
            //let productsData = [];

            if(category !== ''){
                //fetch data from server in query string add category
                const {data} = await fetchData(category);
                setProducts(data);
                //productsData = await fetchData(category);
            } 
            
        }

        fetchProductsData();
        
    }, [category])

    return ( 
        <div className="products-container">
            {!user && (category !== '') ? 
                <div className="info">Zaloguj się aby móc przeglądać produkty</div> 
            : (
                <>
                    <div className="products-grid">
                        {
                            currentProducts.map((product, index) => (
                                <ProductCard product={product} key={index}/>
                            ))
                        }
                    </div>
                    {
                        products.length > 8 && <Pagination currentPage={currentPage} products={products} productsPerPage={productsPerPage} paginate={paginate}/>
                    }
                </>
            )
            }
        </div>
     );
}
 
export default Products;