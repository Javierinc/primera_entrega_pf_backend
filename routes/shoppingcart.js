import { Router } from "express";
import { emptyShoppingCart, postProductToCart, postShoppingCart, getProductsInCart, deleteProductInCart} from "../controllers/shoppingcart.js";

const shoppingCartRouter = Router();

//Rutas /api/shoppingcart
shoppingCartRouter.post('/api/shoppingcart', postShoppingCart);
shoppingCartRouter.delete('/api/shoppingcart/:id_carrito', emptyShoppingCart);
shoppingCartRouter.post('/api/shoppingcart/:id_cart/products', postProductToCart);
shoppingCartRouter.get('/api/shoppingcart/:id_cart/products', getProductsInCart);
shoppingCartRouter.delete('/api/shoppingcart/:id_cart/products/:id_prod', deleteProductInCart)

export default shoppingCartRouter;