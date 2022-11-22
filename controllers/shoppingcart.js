import {randomUUID} from "crypto";
import { ShoppingCartContainer } from "../shoppingCartContainer.js";

const shoppingCart = new ShoppingCartContainer('./shopping-cart.txt');

//Controlador POST SHOPPING CART para crear el carrito de compras
export async function postShoppingCart(req, res){
    const id = randomUUID();
    const cart = await shoppingCart.createShoppingCart(id);
    res.status(200).json(cart);
}
//Controlador DELETE SHOPPING CART para vaciar el carrito
export async function emptyShoppingCart({params: {id_carrito}}, res) {
    const deleted = await shoppingCart.deleteCart(id_carrito);
    !deleted ? res.sendStatus(400) : res.sendStatus(200);
}
//Controlador POST SHOPPING CART para agregar productos al carrito
export async function postProductToCart({body,params: {id_cart}}, res){
    const posted = await shoppingCart.postProduct(id_cart, body);
    !posted ? res.sendStatus(400) : res.status(200).json(posted);
}
//Controlador GET SHOPPING CART para mostrar los productos del carrito
export async function getProductsInCart({params: {id_cart}}, res){
    const productsInCart = await shoppingCart.getProducts(id_cart);
    !productsInCart ? res.sendStatus(400) : res.json(productsInCart);
}

//Controlador DELETE PRODUCT para eliminar un producto del carrito
export async function deleteProductInCart({params}, res){
    const deletedProduct = await shoppingCart.deleteProduct(params.id_cart, params.id_prod);
    !deletedProduct ? res.sendStatus(400) : res.sendStatus(200);
}