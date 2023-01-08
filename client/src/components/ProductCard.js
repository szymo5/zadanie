import { deleteProduct } from "../api"

import CreateProduct from "./CreateProduct";
import Form from "./Form";

const ProductCard = ({product, setProducts, category, isDelete, setIsDelete, currentPage, currentProducts, setCurrentPage, isCreate, setIsCreate, currentId, setCurrentId, setIsSearch}) => {
    const user = JSON.parse(localStorage.getItem('user'));

    const handleDelete = async () => {
        const {data} = await deleteProduct(product.id, category)

        if (user?.root){
            data.unshift({name: "form"})
        }

        setProducts(data);

        setTimeout(()=> {
            console.log(currentProducts);
        },1000)
        

        if(currentProducts.length === 1 && currentPage !== 1) {
            setCurrentPage((prev) => prev-1)
        }

        setIsSearch(false);
    }

    if(product.name === "form") return <CreateProduct isCreate={isCreate} setIsCreate={setIsCreate} setCurrentId={setCurrentId} category={category} setProducts={setProducts}/>

    return (  
        <div className="product-container flex" style={{justifyContent: "center"}}>
            {currentId === product.id ? 
                <Form 
                    setIsCreate={setIsCreate} 
                    setCurrentId={setCurrentId} 
                    currentId={currentId} 
                    currentProducts={currentProducts} 
                    category={category} 
                    setProducts={setProducts}
                    setIsSearch={setIsSearch}
                /> 
            : 
                (isDelete === product.id) ? (
                    <div className="delete-info">
                        <div><p>Czy na pewno chcesz usunać ten<br/>produkt?</p></div>
                        <div className="flex" style={{width: '70px', margin: 'auto', justifyContent: 'space-between'}}>
                            <span className="material-symbols-outlined" style={{color: 'green', fontSize: '30px', cursor: 'pointer'}} onClick={handleDelete}>
                                done
                            </span>
                            <span className="material-symbols-outlined" style={{color: 'red', fontSize: '30px', cursor: 'pointer'}} onClick={() => setIsDelete(false)}>
                                close
                            </span>
                        </div>
                    </div>
                ) : (
                    <div style={{width: '100%'}}>
                        <h3>{product.name}</h3>
                        <div className="img" style={{backgroundImage: `url(${product.imgURL})`}}></div>
                        <p>Cena: {product.price} zł</p>
                        <div className="flex" style={{width: '75px', justifyContent: 'space-between', padding: '10px', boxSizing: 'border-box'}}>
                            <span className="material-symbols-outlined" style={{color: '#555', cursor: 'pointer'}} onClick={() => {setIsCreate(false); setCurrentId(product.id)}}>
                                edit
                            </span>
                            {
                                user?.root && (
                                    <span className="material-symbols-outlined" style={{color: 'red',  cursor: 'pointer'}} onClick={() => setIsDelete(product.id)}>
                                        delete
                                    </span>
                                )
                            }
                        </div>
                    </div>
                )
            }
            
        </div>
    );
}

 
export default ProductCard
