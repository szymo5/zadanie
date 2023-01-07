import { useEffect, useState } from "react";
import { fetchData } from "../api";

import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import Search from "./Search";


const Products = ({products, setProducts, category, user}) => {
    const [isSearch, setIsSearch] = useState(false);

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

            if(category !== ''){
                const {data} = await fetchData(category);

                if (user?.root){
                    data.unshift({name: "form"})
                }

                setProducts(data);
               
            } 
            
        }

        fetchProductsData();
        
    }, [category])

    const childProps = {setProducts, category, isDelete, setIsDelete, currentProducts, currentPage, setCurrentPage, isCreate, setIsCreate, currentId, setCurrentId, setIsSearch};

    if(category === '') return

    return ( 
            <div className="products-container">
                {!user ? 
                    <div className="info">Zaloguj się aby móc przeglądać produkty</div> 
                : (
                    <>
                        {isSearch ? (
                            products.length === 0 ? (
                                <>
                                    <Search products={products} setProducts={setProducts} category={category} setCurrentPage={setCurrentPage} isSearch={isSearch} setIsSearch={setIsSearch}/>
                                    <div className="info">Brak wyników wyszukiwania</div> 
                                </>
                            ) : (
                                <Search products={products} setProducts={setProducts} category={category} setCurrentPage={setCurrentPage} isSearch={isSearch} setIsSearch={setIsSearch}/>
                            )
                        ) : (
                            user.root ? (
                                products.length > 1 && <Search products={products} setProducts={setProducts} category={category} setCurrentPage={setCurrentPage} isSearch={isSearch} setIsSearch={setIsSearch}/>
                            ) : (
                                products.length > 0 ? <Search products={products} setProducts={setProducts} category={category} setCurrentPage={setCurrentPage} isSearch={isSearch} setIsSearch={setIsSearch}/> : <div className="info">Brak produktów</div>
                            )
                        )
                        }


                        {/* {isSearch && products.length === 0 ? (
                            <>
                                <Search products={products} setProducts={setProducts} category={category} setCurrentPage={setCurrentPage} isSearch={isSearch} setIsSearch={setIsSearch}/>
                                <div className="info">Brak wyników wyszukiwania</div> 
                            </>
                            
                        ):(
                            user.root ? (
                                products.length > 1 && <Search products={products} setProducts={setProducts} category={category} setCurrentPage={setCurrentPage} isSearch={isSearch} setIsSearch={setIsSearch}/>
                            ) : (
                                products.length > 0 ? <Search products={products} setProducts={setProducts} category={category} setCurrentPage={setCurrentPage} isSearch={isSearch} setIsSearch={setIsSearch}/> : <div className="info">Brak produktów</div>
                            )
                        )} */}
                        
                        <div className="products-grid">
                            {
                                currentProducts.map((product, key) => (
                                    <ProductCard 
                                        product={product} 
                                        key={key} 
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