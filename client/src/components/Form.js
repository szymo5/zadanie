import { useState, useEffect } from "react";
import FileBase from 'react-file-base64';

import { editProduct, createProduct } from "../api";

const Form = ({setIsCreate, setCurrentId, currentId, currentProducts, category, setProducts}) => {
    const user = JSON.parse(localStorage.getItem('user'));

    const [productData, setProductData] = useState({
        name: '', imgURL: '', price: 0
    });

    const product = currentProducts?.find(p => p.id === currentId);

    useEffect(() => {
        if(product) setProductData(product);
    }, [product]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let data;

        if(currentId){
            data = await editProduct(productData, category);
            setCurrentId(false)

        } else {
            data = await createProduct(productData, category);
            setIsCreate(false)
        }

        setProducts(data.data);

        if (user?.root){
            data.data.unshift({name: "form"})
        }

        setProductData({name: '', imgURL: '', price: 0});
    }

    const cancel = () => {
        if(currentId){
            setCurrentId(false)
        } else {
            setIsCreate(false)
        }
    }

    return ( 
        <div className="form-container">
            <h3 style={{marginBottom: '20px'}}>{currentId ? "Edytuj produkt" : "Utwórz produkt"}</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nazwa produktu" value={productData.name} className="create-form-input" onChange={(e) => setProductData({...productData, name: e.target.value})}/>
                <input type="number" placeholder="Cena" value={productData.price} className="create-form-input" onChange={(e) => setProductData({...productData, price: e.target.value})}/>
                <label className="create-label">{currentId ? "Zmień zdjęcie produktu" : "Dodaj zdjęcie produktu"}</label>
                <div className="create-form-input flex" style={{margin: '5px auto', justifyContent: 'center'}}>
                    <FileBase type="file" multiple={false} onDone={({base64}) => setProductData({...productData, imgURL: base64})}/>
                </div>
                <button type="submit" className="create-btn">{currentId ? "Edytuj" : "Dodaj"}</button>
            </form>
            <span className="material-symbols-outlined" style={{marginTop: '20px', color: '#555', fontSize: '32px', cursor: 'pointer'}} onClick={cancel}>
                cancel
            </span>
            
        </div>
     );
}
 
export default Form;