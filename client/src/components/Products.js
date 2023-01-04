import { useEffect, useState } from "react";
import { fetchData } from "../api";

import ProductCard from "./ProductCard";
import Pagination from "./Pagination";


const Products = ({products, setProducts, category, user}) => {
    // tutaj state od currentID i podany do form jeden form w create component a drugi w product card
    const [isDelete, setIsDelete] = useState(false);
    const [currentId, setCurrentId] = useState(false);
    const [isCreate, setIsCreate] = useState(false);

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

                if (user?.root){
                    data.unshift({name: "form"})
                }

                setProducts(data);
                //productsData = await fetchData(category);
               
            } 
            
        }

        fetchProductsData();
        
    }, [category])

    const childProps = {setProducts, category, isDelete, setIsDelete, currentProducts, setCurrentPage, isCreate, setIsCreate, currentId, setCurrentId};

    return ( 
        <div className="products-container">
            {!user && (category !== '') ? 
                <div className="info">Zaloguj się aby móc przeglądać produkty</div> 
            : (
                <>
                    <div className="products-grid">
                        {
                            currentProducts.map((product, index) => (
                                <ProductCard 
                                    product={product} 
                                    key={index} 
                                    {...childProps}
                                />
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