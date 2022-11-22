import { Router } from "express";
import { deleteProducts, getAllProducts, getProductById, postProducts, putProducts } from "../controllers/products.js";
const productsRouter = Router();

//Endpoint disponble para todos: listar todos los productos
productsRouter.get('/api/products', getAllProducts);

//Endpoint disponbile para todos: listar por id
productsRouter.get('/api/products/:id', getProductById);

//Enpoint disponible solo para administradores
productsRouter.post('/api/products', postProducts);
productsRouter.put('/api/products/:id', putProducts);
productsRouter.delete('/api/products/:id', deleteProducts);


export default productsRouter;