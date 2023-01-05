import { useState } from "react";
import { fetchData } from "../api";

const Search = ({setProducts, category, setCurrentPage, isSearch, setIsSearch}) => {
    const user = JSON.parse(localStorage.getItem('user'));

    const [search, setSearch] = useState('')
    

    const handleSearch = async () => {
        if(search){
            const {data} = await fetchData(category);

            const searchedProducts = data.filter(product => product.name.toLocaleLowerCase().includes(search))

            setProducts(searchedProducts)
            setCurrentPage(1);
            setIsSearch(true);
        }
    }

    const clearSearch = async () => {
        const {data} = await fetchData(category);

        if (user?.root){
            data.unshift({name: "form"})
        }

        setProducts(data);

        setSearch('');
        setIsSearch(false);
    }

    return ( 
        <div className="search-container flex" style={{justifyContent: 'flex-start'}}>
            <div className="search flex" style={{justifyContent: 'space-between'}}>
                <input type="text" value={search} className="search-input" placeholder="Wpisz nazwę produktu" onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}/>
                <span className="material-symbols-outlined" style={{display: 'grid', placeContent: 'center', marginRight: '5px', cursor: "pointer"}} onClick={handleSearch}>
                    search
                </span>
                {isSearch && (<span className="material-symbols-outlined" style={{cursor: 'pointer'}} onClick={clearSearch}>close</span>)}
            </div>
        </div>
     );
}
 
export default Search;