const ProductCard = ({product, key}) => {
    return (  
        <div className="product-container">
            <h3>{product.name}</h3>
            {/* <div style={{width: '100%', 
                         height: '150px', 
                         backgroundImage: `url(${product.imgURL})`, 
                         backgroundSize: 'cover'
            }}/> */}
            <img src={product.imgURL} alt="product image" width="100%" height="200px" style={{padding: '8px', boxSizing: 'border-box'}}/>
            <p>Cena: {product.price} zł</p>
        </div>
    );
}
 
export default ProductCard
