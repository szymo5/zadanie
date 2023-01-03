import Form from "./Form";

const CreateProduct = ({isCreate, setIsCreate, setCurrentId}) => {
    return ( 
        <div className="product-container">
            {!isCreate ? (
                    <span class="material-symbols-outlined add-button" style={{fontSize: '64px', color: '#555', cursor: "pointer"}} onClick={() => {setIsCreate(true); setCurrentId(false)}}>
                        add_circle
                    </span>
                ) : (
                    <Form setIsCreate={setIsCreate}/>
                )
            }
        </div>     
     );
}
 
export default CreateProduct;