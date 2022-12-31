import { useEffect } from "react";
import { fetchData } from "../api";


const Products = ({products, setProducts, category, user}) => {

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
                products.map(product => (
                    <div>{product?.name}</div>
                )))
            }
        </div>
     );
}
 
export default Products;