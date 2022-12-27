import { useEffect } from "react";


const Products = ({products, setProducts, category, user}) => {

    useEffect(() => {
        const fetchProductsData = async () => {
            const productsData = [];

            if(category !== ''){
                //fetch data from server in query string add category
                productsData.push("Test");
                productsData.push("Rokeiciny");
            }

            setProducts(productsData);
        }

        fetchProductsData();
        
    }, [category])

    return ( 
        <div className="products-container">
            {!user && (category !== '') ? 
                <div className="info">Zaloguj się aby móc przeglądać produkty</div> 
            : (
                products.map(product => (
                    <div>{product}</div>
                )))
            }
        </div>
     );
}
 
export default Products;