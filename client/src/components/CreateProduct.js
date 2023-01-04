import Form from "./Form";

const CreateProduct = ({isCreate, setIsCreate, setCurrentId, category, setProducts}) => {
    return ( 
        <div className="product-container flex" style={{justifyContent: "center"}}>
            {!isCreate ? (
                    <span className="material-symbols-outlined" style={{fontSize: '64px', color: '#555', cursor: "pointer"}} onClick={() => {setIsCreate(true); setCurrentId(false)}}>
                        add_circle
                    </span>
                ) : (
                    <Form setIsCreate={setIsCreate} category={category} setProducts={setProducts}/>
                )
            }
        </div>     
     );
}
 
export default CreateProduct;