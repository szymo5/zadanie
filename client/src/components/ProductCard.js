const ProductCard = ({product, key}) => {
    return (  
        <div className="product-container">
            <h3>{product.name}</h3>
            <img src={product.imgURL} alt="product image" width="100%" height="200px" style={{padding: '8px', boxSizing: 'border-box'}}/>
            <p>Cena: {product.price} zł</p>
            <div className="flex" style={{width: '75px', justifyContent: 'space-between', padding: '10px', boxSizing: 'border-box'}}>
                <span className="material-symbols-outlined" style={{color: '#555'}}>
                    edit
                </span>
                <span className="material-symbols-outlined" style={{color: 'red'}}>
                    delete
                </span>
            </div>
        </div>
    );
}
 
export default ProductCard
