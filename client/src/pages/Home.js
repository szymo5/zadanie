import { useState } from "react";

import Categories from "../components/Categories";
import Products from "../components/Products";

const Home = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('');

    return ( 
        <div className="home-container">
            <Categories category={category} setCategory={setCategory}/>
            <Products products={products} setProducts={setProducts} category={category} user={user}/>
        </div> 
    );
}
 
export default Home;