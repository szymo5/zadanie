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