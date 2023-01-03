import {writeFile, readFile} from 'fs/promises';

export const getProducts = async (req, res) => {
    try {
        const {category} = req.query;

        const data = await readFile(`./database/${category}.json`);
        const products = JSON.parse(data);

        res.status(200).json(products);
        
    } catch (error) {
        console.log(error);
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const {category} = req.query;
        const {id} = req.params;

        const data = await readFile(`./database/${category}.json`);
        const products = JSON.parse(data);

        const newProducts = products.filter(product => product.id != id);

        await writeFile(`./database/${category}.json`, JSON.stringify(newProducts));

        res.status(200).json(newProducts);

    } catch (error) {
        console.log(error);
        
    }
}