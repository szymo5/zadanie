import { useState } from "react";
import FileBase from 'react-file-base64';

const Form = ({setIsCreate}) => {
    const [productData, setProductData] = useState({
        name: '', imgURL: '', price: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(test)
    }


    return ( 
        <div className="form-container">
            <h3 style={{marginBottom: '20px'}}>Utwórz</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nazwa produktu" value={productData.name} className="create-form-input" onChange={(e) => setProductData({...productData, name: e.target.value})}/>
                <input type="number" placeholder="Cena" value={productData.price} className="create-form-input" onChange={(e) => setProductData({...productData, price: e.target.value})}/>
                <label className="create-label">Dodaj zdjęcie produktu</label>
                <div className="create-form-input flex" style={{margin: '5px auto', justifyContent: 'center'}}>
                    <FileBase type="file" multiple={false} onDone={({base64}) => setProductData({...productData, imgURL: base64})}/>
                </div>
                <button type="submit" className="create-btn">Dodaj</button>
            </form>
            <span class="material-symbols-outlined" style={{marginTop: '20px', color: '#555', fontSize: '32px', cursor: 'pointer'}} onClick={() => setIsCreate(false)}>
                cancel
            </span>
            
        </div>
     );
}
 
export default Form;