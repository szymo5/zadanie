import express from 'express';

const router = express.Router();

import {getProducts, deleteProduct} from '../controllers/products.js';

router.get('/', getProducts);
router.delete('/:id', deleteProduct);


export default router;