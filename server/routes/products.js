import express from 'express';

const router = express.Router();

import {getProducts, deleteProduct, editProduct, createProduct} from '../controllers/products.js';

router.get('/', getProducts);
router.delete('/:id', deleteProduct);
router.patch('/', editProduct);
router.post('/', createProduct);


export default router;