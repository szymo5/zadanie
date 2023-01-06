

const Categories = ({category, setCategory}) => {
    const categoryList = [{name: "Gry planszowe", query: "games"},
                          {name: "Samochody elektryczne", query: "cars"},
                          {name: "Telewizory", query: "tvs"},
                          {name: "Zabawki", query: "toys"}
                         ];

    return ( 
        <div className="category-container flex">
           {categoryList.map((c,i) => (
                <div className={c.query === category ? "category flex active" : "category flex" } onClick={() => setCategory(c.query)} key={i}>
                    {c.name}
                </div>        
           ))}
        </div>
     );
}
 
export default Categories;