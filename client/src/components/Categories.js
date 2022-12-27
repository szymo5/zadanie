

const Categories = ({category, setCategory}) => {
    const categoryList = ["Gry planszowe", "Samochody elektryczne", "Telewizory", "Zabawki"];

    return ( 
        <div className="category-container flex">
           {categoryList.map(c => (
                <div className={c === category ? "category flex active" : "category flex" } onClick={() => setCategory(c)}>
                    {c}
                </div>        
           ))}
        </div>
     );
}
 
export default Categories;