import { useState } from "react"
import { deleteProduct } from "../api"

import CreateProduct from "./CreateProduct";

const ProductCard = ({product, key, canDelete, setProducts, category, isDelete, setIsDelete, currentProducts, setCurrentPage, user, isCreate, setIsCreate, currentId, setCurrentId}) => {

    const handleDelete = async () => {
        const {data} = await deleteProduct(product.id, category)

        if (user?.root){
            data.unshift({name: "form"})
        }

        setProducts(data);

        if(currentProducts.length === 1) {
            setCurrentPage((prev) => prev-1)
        }
    }

    if(product.name === "form") return <CreateProduct isCreate={isCreate} setIsCreate={setIsCreate} setCurrentId={setCurrentId}/>

    return (  
        <div className="product-container" style={{position: "relative"}} key={key}>
            {(isDelete === product.id) ? (
                <div className="delete-info">
                    <div><p>Czy na pewno chcesz usunać ten<br/>produkt?</p></div>
                    <div className="flex" style={{width: '70px', margin: 'auto', justifyContent: 'space-between'}}>
                        <span class="material-symbols-outlined" style={{color: 'green', fontSize: '30px', cursor: 'pointer'}} onClick={handleDelete}>
                            done
                        </span>
                        <span class="material-symbols-outlined" style={{color: 'red', fontSize: '30px', cursor: 'pointer'}} onClick={() => setIsDelete(false)}>
                            close
                        </span>
                    </div>
                </div>
            ) : (
                <div>
                    <h3>{product.name}</h3>
                    <img src={product.imgURL} alt="product image" width="100%" height="200px" style={{padding: '8px', boxSizing: 'border-box'}}/>
                    <p>Cena: {product.price} zł</p>
                    <div className="flex" style={{width: '75px', justifyContent: 'space-between', padding: '10px', boxSizing: 'border-box'}}>
                        <span className="material-symbols-outlined" style={{color: '#555', cursor: 'pointer'}} onClick={() => {setIsCreate(false); setCurrentId(product.id)}}>
                            edit
                        </span>
                        {currentId === product.id && "sss"}
                        {
                            canDelete && (
                                <span className="material-symbols-outlined" style={{color: 'red',  cursor: 'pointer'}} onClick={() => setIsDelete(product.id)}>
                                    delete
                                </span>
                            )
                        }
                    </div>
                </div>
            )}
        </div>
    );
}

 
export default ProductCard
