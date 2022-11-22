import {randomUUID} from "crypto";

import { Container } from "../container.js";
import { authAdmin } from "../helpers/auth-admin.js";


const CONTAINER = new Container('./products.txt');

//Controlador GET PRODUCTS disponible para todos
export async function getAllProducts ( req, res ) {
    const products = await  CONTAINER.getAll();
    res.json(products);
}
//Controlador GET PRODUCT BY ID disponible para todos
export async function getProductById ( {params: {id}}, res ) {
    const search = await CONTAINER.getById(id);
    if(!search){
        res.status(404).json({message: `We couldn't find a product with this id: ${id}`});
    }else {
        res.json(search);
    }
}
//Controlador POST PRODUCT - Exclusivo para admin
export async function postProducts ({body}, res) {
    //Se verifica que sea usuario admin
    const { admin } = body;
    const auth = authAdmin(admin);
    if(auth){
        const product = body;
        const productCleaned = Object
        .keys(product)
        .reduce((prev, next) => {
            if (next === 'admin')return prev
            return {
                ...prev,
                [next]: product[next]
            }
        }, {})
        productCleaned.id = randomUUID();
        await CONTAINER.save(productCleaned);
        res.json(productCleaned.id);
    }else{
        res.status(401).json({error:401, description: `route /api/products method POST unauthorized`});    
    }
}
//Controlador PUT PRODUCT - Exclusivo para admin
export async function putProducts ({body, params: {id}}, res){
    //Se verifica que sea usuario admin
    const { admin } = body;
    const auth = authAdmin(admin);
    if(auth){
        const update = body;
        const updateCleaned = Object
        .keys(update)
        .reduce((prev, next) => {
            if (next === 'admin')return prev
            return {
                ...prev,
                [next]: update[next]
            }
        }, {})
        const updated = await CONTAINER.updateProduct(id, updateCleaned);
        !updated ? res.status(404).json({error: 404 , description: `We couldn't find a product with this id: ${id}`}) : res.json(updateCleaned);
    }else{
        res.status(401).json({error:401, description: 'route /api/products method PUT unauthorized '});
    }
}
//Controlador DELETE PRODUCT - Exclusivo para admin
export async function deleteProducts ({body, params: {id}}, res){
    //Se verifica que sea usuario admin
    const { admin } = body;
    const auth = authAdmin(admin);
    if(auth){
        const deleted = await CONTAINER.deleteById(id);
        deleted === null ? res.sendStatus(404) : res.sendStatus(200);
    }else{
        res.status(401).json({error:401, description: `route /api/products method DELETE unauthorized `});
    }
}